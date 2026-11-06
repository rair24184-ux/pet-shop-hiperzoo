import Image from "next/image";
import { company } from "@/data/company";
import { InstagramIcon, PinIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <h2 className="text-xl font-black">{company.name}</h2>
          <ul className="space-y-2 text-white/90">
            <li>
              <a href={company.instagram} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:underline">
                <InstagramIcon width={18} height={18} /> {company.instagramHandle}
              </a>
            </li>
            <li>
              <a href={company.whatsapp} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:underline">
                <WhatsAppIcon width={18} height={18} /> {company.phoneDisplay}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <PinIcon width={18} height={18} className="mt-0.5 shrink-0" />
              <span>
                {company.address.line1}, {company.address.line2}, {company.address.district}
              </span>
            </li>
          </ul>
        </div>
        <Image src="/brand/logo-docg-branca.webp" alt="docg." width={160} height={116} className="h-24 w-auto self-start md:self-center" />
      </div>
      <div className="border-t border-white/20">
        <div className="container-x flex flex-col gap-2 py-4 text-sm text-white/80 sm:flex-row sm:justify-between">
          <p>© 2026 {company.name}. Todos os direitos reservados.</p>
          <p>Banho e tosa Super Premium em Curitiba.</p>
        </div>
      </div>
    </footer>
  );
}
