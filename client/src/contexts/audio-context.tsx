import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

interface AudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  toggle: () => void;
  isLoaded: boolean;
}

const AudioContext = createContext<AudioContextType | null>(null);

const FADE_DURATION = 800; // ms
const TARGET_VOLUME = 0.3;
const STORAGE_KEY = "audio-player-muted";

interface AudioProviderProps {
  src: string;
  children: ReactNode;
}

export function AudioProvider({ src, children }: AudioProviderProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);
  const isFadingRef = useRef(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isActuallyPlaying, setIsActuallyPlaying] = useState(false);

  // Create audio element once and keep it alive
  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = "none";
    audio.volume = 0;

    const handleCanPlay = () => setIsLoaded(true);
    const handleError = (e: Event) => {
      console.warn("Audio error:", e);
      setIsLoaded(false);
    };
    const handlePlay = () => setIsActuallyPlaying(true);
    const handlePause = () => setIsActuallyPlaying(false);

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("error", handleError);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, [src]);

  // Load saved state from localStorage (persists across sessions)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        setIsMuted(saved === "true");
        setHasInteracted(true);
      }
    } catch {
      // localStorage not available (private browsing, etc.)
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    if (hasInteracted) {
      try {
        localStorage.setItem(STORAGE_KEY, String(isMuted));
      } catch {
        // localStorage not available
      }
    }
  }, [isMuted, hasInteracted]);

  // Clear fade interval on unmount
  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, []);

  const fadeAudio = useCallback(
    (targetVolume: number, onComplete?: () => void) => {
      const audio = audioRef.current;
      if (!audio) return;

      // Clear any existing fade
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }

      isFadingRef.current = true;

      const steps = 20;
      const stepDuration = FADE_DURATION / steps;
      const volumeStep = (targetVolume - audio.volume) / steps;
      let currentStep = 0;

      fadeIntervalRef.current = window.setInterval(() => {
        currentStep++;
        const newVolume = Math.max(0, Math.min(1, audio.volume + volumeStep));
        audio.volume = newVolume;

        if (currentStep >= steps) {
          if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
            fadeIntervalRef.current = null;
          }
          audio.volume = targetVolume;
          isFadingRef.current = false;
          onComplete?.();
        }
      }, stepDuration);
    },
    []
  );

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Prevent rapid toggle during fade animation
    if (isFadingRef.current) return;

    setHasInteracted(true);

    if (isMuted) {
      // Unmute: start playing with fade in
      try {
        audio.volume = 0;
        await audio.play();
        fadeAudio(TARGET_VOLUME);
        setIsMuted(false);
      } catch (error) {
        console.warn("Audio playback failed:", error);
      }
    } else {
      // Mute: fade out then pause
      fadeAudio(0, () => {
        audio.pause();
      });
      setIsMuted(true);
    }
  }, [isMuted, fadeAudio]);

  // Auto-resume if returning with audio enabled (after navigation)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isLoaded || !hasInteracted) return;

    if (!isMuted && audio.paused) {
      audio.volume = TARGET_VOLUME;
      audio.play().catch(() => {
        // Autoplay blocked, revert to muted state
        setIsMuted(true);
      });
    }
  }, [isLoaded, isMuted, hasInteracted]);

  const value: AudioContextType = {
    isPlaying: isActuallyPlaying,
    isMuted,
    toggle,
    isLoaded,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
