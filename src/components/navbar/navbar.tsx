"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  MainMenu,
  ThemeToggle,
  Burger,
  MobileMenu,
  MediaLinks,
  Logo,
  BurgerRadix,
} from "./components";
import { NAVBAR_TRANSITION_TIME } from "./constants";
import { Wrapper } from "@/components";
import { useDisclosure } from "@/hooks";
import { cn } from "@/utils/cn";

const Navbar = () => {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState<number | undefined>(0);

  const {
    isOpen: isMobileMenuOpen,
    onToggle: toggleMobileMenu,
    onClose: closeMobileMenu,
    isUnmounting,
  } = useDisclosure({ timeout: NAVBAR_TRANSITION_TIME, closeOnResize: true });

  useEffect(() => {
    if (!containerRef.current) return;
    setNavbarHeight(containerRef.current?.offsetHeight);
  }, []);

  const burgerId = `${id}-burger`;
  const mobileMenuId = `${id}-mobile-menu`;

  return (
    <header
      ref={containerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-navbar h-20 bg-bg-secondary shadow",
        "flex items-center"
      )}
    >
      <Wrapper className="h-full">
        <div className="flex h-full items-center justify-between">
          <Logo />
          <MainMenu />
          <div className="flex items-center gap-4">
            <MediaLinks />
            <ThemeToggle />
            <Burger
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
              id={burgerId}
              aria-expanded={isMobileMenuOpen}
              aria-haspopup="menu"
              aria-controls={mobileMenuId}
            />
            <BurgerRadix navbarHeight={navbarHeight} />
          </div>
          {isMobileMenuOpen && (
            <MobileMenu
              isMobileMenuOpen={isMobileMenuOpen}
              navbarHeight={navbarHeight}
              closeMobileMenu={closeMobileMenu}
              isUnmounting={isUnmounting}
              id={mobileMenuId}
              role="menu"
              aria-labelledby={burgerId}
            />
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export { Navbar };
