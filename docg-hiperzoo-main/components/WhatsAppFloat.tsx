import { company } from "@/data/company";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-[0_14px_30px_-10px_rgba(37,211,102,0.8)] transition hover:scale-105"
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  );
}
