"use client";

import { motion } from "framer-motion";
import DepthCarousel from "./DepthCarousel";
import { company, gallery } from "@/data/company";
import { ArrowIcon, StarIcon, WhatsAppIcon } from "./Icons";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section className="dots-bg relative overflow-hidden">
      <div className="container-x grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        <div className="relative z-10">
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-teal-dark shadow-sm ring-1 ring-teal-soft">
            <span className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} width={14} height={14} />
              ))}
            </span>
            {company.rating.value} no Google · {company.rating.count} avaliações
          </motion.div>

          <motion.h1 {...fade(0.08)} className="mt-5 text-[40px] font-black leading-[1.02] tracking-tight text-ink sm:text-[52px] lg:text-[60px]">
            O melhor banho do mundo, <span className="text-teal">no Shopping Curitiba.</span>
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-5 max-w-[52ch] text-lg leading-relaxed text-muted">
            Banho em banheira vitoriana, tosa com produtos Super Premium e groomers que tratam seu pet como se fosse
            deles. Tudo isso sem gaiola, num ambiente livre e tranquilo.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap gap-3">
            <a href={company.whatsapp} target="_blank" rel="noopener" className="btn btn-wa">
              <WhatsAppIcon width={20} height={20} />
              Agendar pelo WhatsApp
            </a>
            <a href="#servicos" className="btn btn-ghost">
              Ver serviços
              <ArrowIcon width={18} height={18} />
            </a>
          </motion.div>

          <motion.ul {...fade(0.32)} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-muted">
            <li>Sem gaiola</li>
            <li>Produtos Super Premium</li>
            <li>Piso L1, ao lado da Hiperzoo</li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[440px] sm:h-[520px] lg:h-[560px]"
        >
          <DepthCarousel
            items={gallery}
            cardWidth={300}
            cardHeight={380}
            depth={220}
            spread={90}
            tilt={22}
            tiltDirection="right"
            perspective={1400}
            visibleCards={4}
            falloff={0.2}
            blur={6}
            tint="#0e6f78"
            autoplay
            loop
            ariaLabel="Pets depois do banho na Docg"
          />
        </motion.div>
      </div>
    </section>
  );
}
