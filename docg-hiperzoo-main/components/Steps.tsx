import Image from "next/image";
import Reveal from "./Reveal";
import { company, steps } from "@/data/company";
import { WhatsAppIcon } from "./Icons";

export default function Steps() {
  return (
    <section id="como-funciona" className="py-20 md:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-[460px]">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-teal-soft" aria-hidden />
            <div className="absolute -bottom-8 -right-4 h-56 w-56 rounded-full bg-teal/15" aria-hidden />
            <Image
              src="/pets/golden-banho.webp"
              alt="Golden retriever tomando banho de espuma em banheira vitoriana"
              width={900}
              height={1125}
              className="relative rounded-[28px] shadow-[0_40px_80px_-40px_rgba(14,111,120,0.6)]"
            />
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-white px-5 py-3 shadow-lg ring-1 ring-black/5">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">Ambiente</p>
              <p className="text-lg font-black text-teal-dark">Livre, sem gaiola</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Como funciona</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">Simples assim, em três passos</h2>
          </Reveal>

          <ol className="mt-10 space-y-7">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={0.08 + i * 0.08}>
                <li className="flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-teal text-lg font-black text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-ink">{s.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.35} className="mt-10">
            <a href={company.whatsapp} target="_blank" rel="noopener" className="btn btn-wa">
              <WhatsAppIcon width={20} height={20} />
              Quero agendar
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
