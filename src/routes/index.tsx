import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { meta, metaContent } from "../config/meta";
import { useLanguage } from "../lib/language";

import logoAsset from "../assets/logoFinal.png.asset.json";
import MainHeader from "@/components/page/header";
import HeroBanner from "@/components/page/heroBanner";
import History from "@/components/page/history";
import Members from "@/components/page/members";
import Music from "@/components/page/music";
import Press from "@/components/page/press";
import Contact from "@/components/page/contact";
import MainFooter from "@/components/page/mainFooter";
const pageTitle =
  meta.find((item) => typeof item.title === "string")?.title ??
  "R U I D O — Stoner / Doom / Desert Rock";

export const Route = createFileRoute("/")({
  head: () => ({
    title: pageTitle,
    meta: meta.slice(1),
  }),
  component: Index,
});

function Index() {
  const { language } = useLanguage();

  useEffect(() => {
    const content = metaContent[language];
    document.title = content.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", content.description);
  }, [language]);

  return (
    <div className="site-shell min-h-screen overflow-hidden bg-background text-foreground">
      <MainHeader />
      <main>
        <HeroBanner />
        <History />
        <Music />
        <Members />
        <Press />
        <Contact />
      </main>
      <MainFooter />
    </div>
  );
}
