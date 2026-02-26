"use client";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || isMenuOpen
            ? "bg-white shadow-sm"
            : "bg-white/95 backdrop-blur-md"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity relative z-50"
            >
              <Image
                src="/logo.png"
                alt="Town Planning Support"
                width={180}
                height={60}
                className="h-10 w-auto"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-navy-700 bg-navy-100"
                      : "text-slate-600 hover:text-navy-700 hover:bg-navy-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
              <Button href="/contact" size="sm">
                Get in Touch
              </Button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 -mr-2 text-navy-700 hover:text-navy-900 transition-colors relative z-50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              type="button"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/20 z-40 lg:hidden transition-opacity duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed top-16 left-0 right-0 bottom-0 z-40 bg-white lg:hidden transition-all duration-300 overflow-y-auto",
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <Container className="py-6">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl text-lg font-medium transition-all",
                  pathname === link.href
                    ? "text-navy-700 bg-navy-100"
                    : "text-slate-600 hover:text-navy-700 hover:bg-navy-50"
                )}
                style={{ 
                  animationDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  animation: isMenuOpen ? "fadeIn 0.3s ease-out forwards" : "none"
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-slate-200 px-4">
            <Button href="/contact" className="w-full" size="lg" onClick={() => setIsMenuOpen(false)}>
              Get in Touch
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
