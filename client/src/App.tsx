import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AudioProvider } from "@/contexts/audio-context";
import { GlobalAudioButton } from "@/components/global-audio-button";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import WorkCategory from "@/pages/work-category";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/work/:category" component={WorkCategory} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <AudioProvider src="/audio/background-music.mp3">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
          <GlobalAudioButton />
        </TooltipProvider>
      </QueryClientProvider>
    </AudioProvider>
  );
}

export default App;