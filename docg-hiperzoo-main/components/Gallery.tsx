import Image from "next/image";
import Reveal from "./Reveal";
import { company, gallery } from "@/data/company";
import { InstagramIcon } from "./Icons";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-teal-soft/60 py-20 md:py-24">
      <div className="container-x">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[56ch]">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Galeria</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">Olha como eles saem daqui</h2>
          </div>
          <a href={company.instagram} target="_blank" rel="noopener" className="btn btn-ghost">
            <InstagramIcon width={20} height={20} />
            {company.instagramHandle}
          </a>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.image} delay={i * 0.05}>
              <figure className="group overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_-28px_rgba(14,111,120,0.45)]">
                <Image
                  src={g.image}
                  alt={g.alt}
                  width={900}
                  height={1125}
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
