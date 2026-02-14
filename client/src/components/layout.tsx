import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { PageTransition } from "@/components/ui/page-transition";
import { Magnetic } from "@/components/ui/magnetic";
import { Preloader } from "@/components/ui/preloader";
import { MenuOverlay } from "@/components/ui/menu-overlay";
import { Footer } from "@/components/footer";
import { LanguageSelector } from "@/components/ui/language-selector";
import { SCROLL_THRESHOLD } from "@/config/constants";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-foreground flex flex-col relative">
        <Preloader />
        <CustomCursor />
        <GrainOverlay />
        <MenuOverlay isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        
        {/* Main Content Wrapper - z-index 10 to sit ON TOP of footer */}
        <div className="relative z-10 bg-background mb-[400px] md:mb-[500px] shadow-2xl rounded-b-[30px] md:rounded-b-[50px] overflow-hidden">
          <PageTransition>
            {/* Header */}
            <header
              className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-black/90 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
              )}
            >
              <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/">
                  <a className="text-2xl font-serif font-bold tracking-tight text-white hover:text-purple-400 transition-colors relative z-[60]">
                    DANI DÍAZ
                  </a>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                  <LanguageSelector />
                  <Magnetic>
                    <button
                      onClick={() => setMobileMenuOpen(true)}
                      className="text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group cursor-hover"
                    >
                      <span className="relative overflow-hidden block h-4">
                          <span className="block group-hover:-translate-y-full transition-transform duration-300">Menu</span>
                          <span className="block absolute top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">Open</span>
                      </span>
                      <Menu className="w-5 h-5" />
                    </button>
                  </Magnetic>
                </nav>

                <button
                  className="md:hidden text-white hover:text-purple-400 relative z-[60]"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu />
                </button>
              </div>
            </header>

            {/* Main Content */}
            <main className="min-h-screen pt-24 pb-12 bg-background">
              {children}
            </main>
          </PageTransition>
        </div>

        {/* Footer - Fixed at bottom, z-index 0 to sit BEHIND content */}
        <div className="fixed bottom-0 left-0 right-0 z-0 h-[400px] md:h-[500px]">
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}