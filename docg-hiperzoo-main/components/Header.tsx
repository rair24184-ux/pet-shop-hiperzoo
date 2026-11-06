"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { company } from "@/data/company";
import { WhatsAppIcon } from "./Icons";

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#onde", label: "Onde estamos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_8px_30px_-18px_rgba(14,111,120,0.5)]" : ""
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Link href="#" className="flex items-center gap-3" aria-label="docg. Hiperzoo Shopping Curitiba">
          <Image src="/brand/logo-docg.png" alt="docg." width={128} height={40} priority className="h-9 w-auto" />
          <span className="hidden text-sm font-semibold text-muted sm:inline">Hiperzoo Shopping Curitiba</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Seções">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[15px] font-semibold text-ink/80 hover:text-teal-dark">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={company.whatsapp} target="_blank" rel="noopener" className="btn btn-wa hidden px-5 py-2.5 text-sm sm:inline-flex">
            <WhatsAppIcon width={18} height={18} />
            Agendar banho
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-teal-soft text-teal-dark lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition ${open ? "top-[7px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition ${open ? "top-[7px] -rotate-45" : "top-[14px]"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-teal-soft bg-white lg:hidden">
          <nav className="container-x flex flex-col py-3" aria-label="Seções">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base font-semibold text-ink/85">
                {n.label}
              </a>
            ))}
            <a href={company.whatsapp} target="_blank" rel="noopener" className="btn btn-wa mt-2 justify-center">
              <WhatsAppIcon width={18} height={18} />
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
