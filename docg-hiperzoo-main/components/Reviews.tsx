import Reveal from "./Reveal";
import { company, reviews } from "@/data/company";
import { StarIcon } from "./Icons";

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 md:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[58ch] text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Avaliações</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">Quem já trouxe o pet, conta</h2>
          <p className="mt-4 text-lg text-muted">
            Nota {company.rating.value} no Google, com {company.rating.count} avaliações de tutores de verdade.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <blockquote className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_18px_40px_-28px_rgba(14,111,120,0.45)] ring-1 ring-black/[0.04]">
                <span className="flex gap-0.5 text-amber-400" aria-label="5 estrelas">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <StarIcon key={k} width={16} height={16} />
                  ))}
                </span>
                <p className="mt-4 flex-1 leading-relaxed text-ink/85">“{r.text}”</p>
                <footer className="mt-6">
                  <p className="font-extrabold text-ink">{r.name}</p>
                  <p className="text-sm text-muted">{r.meta}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <a href={company.mapsUrl} target="_blank" rel="noopener" className="font-bold text-teal-dark underline-offset-4 hover:underline">
            Ver todas as avaliações no Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}
