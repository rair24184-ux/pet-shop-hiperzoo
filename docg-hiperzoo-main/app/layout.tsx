import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { company } from "@/data/company";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `${company.name} | Banho e tosa no Shopping Curitiba`,
  description:
    "Banho e tosa Super Premium no Shopping Curitiba. Banheira vitoriana, groomers especialistas e ambiente livre, sem gaiola. Agende pelo WhatsApp.",
  openGraph: {
    title: company.name,
    description: company.tagline,
    locale: "pt_BR",
    type: "website",
    images: ["/pets/samoieda.webp"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
