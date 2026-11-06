import Reveal from "./Reveal";
import { services } from "@/data/company";
import { serviceIcons } from "./Icons";

export default function Services() {
  return (
    <section id="servicos" className="bg-cloud py-20 md:py-24">
      <div className="container-x">
        <Reveal className="max-w-[60ch]">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Serviços</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">
            Um momento de spa de verdade pro seu pet
          </h2>
          <p className="mt-4 text-lg text-muted">
            Cada etapa foi pensada pra ele sair limpo, cheiroso e, principalmente, tranquilo.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className="group h-full rounded-2xl bg-white p-7 shadow-[0_18px_40px_-28px_rgba(14,111,120,0.45)] ring-1 ring-black/[0.03] transition hover:-translate-y-1">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-soft text-teal-dark transition group-hover:bg-teal group-hover:text-white">
                    <Icon width={24} height={24} />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
