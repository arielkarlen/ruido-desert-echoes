import { members } from "../../config/members";
import { useLanguage } from "../../lib/language";

export default function Members() {
  const { t } = useLanguage();
  const { members: membersCopy } = t;

  return (
    <section id="banda" className="border-y border-border bg-secondary/40 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex items-end justify-between gap-8">
          <div>
            <p className="section-kicker">{membersCopy.kicker}</p>
            <h2 className="section-title mt-5">{membersCopy.title}</h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-6 text-muted-foreground md:block">
            {membersCopy.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {members.map((member, index) => (
            <article key={member.role} className="member-card group">
              <div className="relative aspect-[3/4] overflow-hidden bg-card">
                <img
                  src={member.image}
                  alt={`${member.name}, ${membersCopy.roles[index]}`}
                  width={768}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
                <span className="absolute left-3 top-3 font-mono text-[9px] text-foreground/60">
                  0{index + 1}
                </span>
              </div>
              <div className="border-t border-border px-1 py-5">
                <h3 className="font-display text-sm font-black uppercase md:text-base">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs uppercase text-primary">{membersCopy.roles[index]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
