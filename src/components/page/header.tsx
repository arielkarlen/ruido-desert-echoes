import logoAsset from "../../assets/logoFinal.png";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../lib/language";

export default function MainHeader() {
  const { language, setLanguage, t } = useLanguage();
  const nav = t.nav;
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pendingSectionRef = useRef<string | null>(null);
  const scrollEndHandlerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const sections = nav
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    let animationFrame: number | null = null;

    const updateActiveSection = () => {
      animationFrame = null;

      if (pendingSectionRef.current) {
        return;
      }

      const activationLine = 81;
      const active = sections.reduce<Element | null>((current, section) => {
        return section.getBoundingClientRect().top <= activationLine ? section : current;
      }, null);

      setActiveSection(active ? `#${active.id}` : "");
    };

    const scheduleUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [nav]);

  useEffect(() => {
    return () => {
      if (scrollEndHandlerRef.current) {
        document.removeEventListener("scrollend", scrollEndHandlerRef.current);
      }
    };
  }, []);

  const handleNavClick = (href: string) => {
    if (href === activeSection) {
      return;
    }

    if (scrollEndHandlerRef.current) {
      document.removeEventListener("scrollend", scrollEndHandlerRef.current);
    }

    pendingSectionRef.current = href;
    setActiveSection(href);
    setMenuOpen(false);

    const finishNavigation = () => {
      pendingSectionRef.current = null;
      setActiveSection(href);
      scrollEndHandlerRef.current = null;
    };

    scrollEndHandlerRef.current = finishNavigation;
    document.addEventListener("scrollend", finishNavigation, { once: true });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" aria-label="R U I D O — Inicio" className="block w-36 md:w-44">
          <img src={logoAsset} alt="R U I D O" width={877} height={278} className="h-auto w-full" />
        </a>
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {nav.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`nav-link ${activeSection === href ? "active" : ""}`}
              aria-current={activeSection === href ? "location" : undefined}
              onClick={() => handleNavClick(href)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-1 font-mono text-xs uppercase tracking-wide"
            aria-label="Selector de idioma"
          >
            <button
              type="button"
              className={`cursor-pointer px-1 transition-colors hover:text-primary ${language === "es" ? "text-primary" : "text-muted-foreground"}`}
              aria-current={language === "es" ? "true" : undefined}
              onClick={() => setLanguage("es")}
            >
              ES
            </button>
            <span className="text-muted-foreground">|</span>
            <button
              type="button"
              className={`cursor-pointer px-1 transition-colors hover:text-primary ${language === "en" ? "text-primary" : "text-muted-foreground"}`}
              aria-current={language === "en" ? "true" : undefined}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="icon-button md:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          aria-label="Navegación móvil"
          className="border-t border-border bg-background px-5 py-5 md:hidden"
        >
          {nav.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`block border-b py-4 font-display text-lg uppercase ${activeSection === href ? "text-primary" : ""
                } ${activeSection === href ? "border-primary" : "border-border"}`}
              aria-current={activeSection === href ? "location" : undefined}
              onClick={() => handleNavClick(href)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
