import logoAsset from "../../assets/logoFinal.png";
import { useLanguage } from "../../lib/language";

export default function MainFooter() {
  const { t } = useLanguage();
  const { footer } = t;

  return (
    <footer className="border-t border-border bg-background px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <img
          src={logoAsset}
          alt="R U I D O"
          width={877}
          height={278}
          loading="lazy"
          className="w-32"
        />
        <p className="text-[12pt] italic text-primary">{footer.quote}</p>
        <p className="font-mono text-[9px] uppercase text-muted-foreground">{footer.copyright}</p>
      </div>
    </footer>
  );
}
