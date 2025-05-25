import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 md:px-6">
        <div className="flex h-16 items-center justify-between mx-auto max-w-7xl">
          {/* Logo and app name on the left */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <img src="/quota.svg" className="w-12 h-12" />
              InstantQuote
            </Link>
          </div>

          {/* Absolute positioning for perfect centering */}

          {/* Login and Signup on the right */}
          <div className="hidden md:flex gap-4">
            <Link to="/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full px-4">
          <nav className="flex flex-col gap-4 p-4">
            <div className="flex gap-4 mt-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
