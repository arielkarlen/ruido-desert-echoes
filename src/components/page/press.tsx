import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { press, type PressCategory } from "../../config/press";
import { useLanguage } from "../../lib/language";

type FilterValue = PressCategory | "all";

export default function Press() {
  const { t } = useLanguage();
  const { press: pressCopy } = t;
  const [filter, setFilter] = useState<FilterValue>("all");

  const filters: FilterValue[] = ["all", "nota", "entrevista", "podcast"];
  const items = filter === "all" ? press : press.filter((item) => item.category === filter);

  return (
    <section id="prensa" className="border-y border-border bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">{pressCopy.kicker}</p>
            <h2 className="section-title mt-5">{pressCopy.title}</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground md:text-right">
            {pressCopy.subtitle}
          </p>
        </div>
        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((value) => (
            <button
              key={value}
              type="button"
              className={`press-filter cursor-pointer ${filter === value ? "active" : ""}`}
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
            >
              {value === "all" ? pressCopy.filters.all : pressCopy.filters[value]}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.url} className="press-card">
              <div>
                <span className="press-tag">{pressCopy.categoryLabels[item.category]}</span>
                <h3 className="mt-4 font-display text-lg font-black uppercase leading-tight">
                  {item.outlet}
                </h3>
                <p className="mt-1 text-xs uppercase text-muted-foreground">{item.country}</p>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="music-button music-button-secondary"
              >
                {pressCopy.viewLabel} <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
