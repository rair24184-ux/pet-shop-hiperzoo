import Reveal from "./Reveal";
import { company } from "@/data/company";
import { ClockIcon, InstagramIcon, PinIcon, WhatsAppIcon } from "./Icons";

export default function Location() {
  return (
    <section id="onde" className="bg-cloud py-20 md:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Reveal>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Onde estamos</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">Dentro do Shopping Curitiba</h2>
            <p className="mt-4 text-lg text-muted">
              Piso L1, pertinho da Hiperzoo. Dá pra deixar o pet, resolver suas coisas no shopping e buscar ele pronto.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-teal-dark shadow-sm">
                <PinIcon width={22} height={22} />
              </span>
              <div>
                <p className="font-extrabold text-ink">{company.address.line1}</p>
                <p className="text-muted">
                  {company.address.line2}
                  <br />
                  {company.address.district} · {company.address.cep}
                </p>
                <a href={company.mapsUrl} target="_blank" rel="noopener" className="mt-1 inline-block font-bold text-teal-dark underline-offset-4 hover:underline">
                  Abrir no Google Maps
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-teal-dark shadow-sm">
                <ClockIcon width={22} height={22} />
              </span>
              <div className="w-full max-w-[320px]">
                <p className="font-extrabold text-ink">Horário</p>
                <dl className="mt-1 divide-y divide-black/5">
                  {company.hours.map((h) => (
                    <div key={h.day} className="flex justify-between py-1.5 text-muted">
                      <dt>{h.day}</dt>
                      <dd className="font-semibold text-ink">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={company.whatsapp} target="_blank" rel="noopener" className="btn btn-wa">
                <WhatsAppIcon width={20} height={20} />
                {company.phoneDisplay}
              </a>
              <a href={company.instagram} target="_blank" rel="noopener" className="btn btn-ghost">
                <InstagramIcon width={20} height={20} />
                {company.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="min-h-[360px] overflow-hidden rounded-[28px] shadow-[0_30px_60px_-40px_rgba(14,111,120,0.6)] ring-1 ring-black/5">
          <iframe
            title="Mapa da Docg Hiperzoo Shopping Curitiba"
            src={company.mapsEmbed}
            className="h-full min-h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
