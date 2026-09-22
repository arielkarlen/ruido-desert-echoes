import { nav } from "../../config/nav";
import logoAsset from "../../assets/logoFinal.png";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = nav
      .map(([, href]) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      { rootMargin: "-80px 0px -55%", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" aria-label="R U I D O — Inicio" className="block w-36 md:w-44">
          <img src={logoAsset} alt="R U I D O" width={877} height={278} className="h-auto w-full" />
        </a>
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {nav.map(([label, href]) => (
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
        <button
          type="button"
          className="icon-button md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <nav
          aria-label="Navegación móvil"
          className="border-t border-border bg-background px-5 py-5 md:hidden"
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`block border-b py-4 font-display text-lg uppercase ${
                activeSection === href ? "text-primary" : ""
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
