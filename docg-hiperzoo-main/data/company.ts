export const company = {
  name: "Docg Hiperzoo Shopping Curitiba",
  shortName: "docg.",
  tagline: "O melhor banho do mundo, no Shopping Curitiba.",
  phoneDisplay: "(41) 98428-0002",
  phoneE164: "5541984280002",
  whatsapp:
    "https://wa.me/5541984280002?text=" +
    encodeURIComponent("Olá! Vim pelo site da Docg Hiperzoo Shopping Curitiba e quero agendar um banho."),
  instagram: "https://www.instagram.com/docg.hzcuritiba",
  instagramHandle: "@docg.hzcuritiba",
  address: {
    line1: "Shopping Curitiba, Piso L1",
    line2: "Rua Brigadeiro Franco, 2300",
    district: "Centro, Curitiba, PR",
    cep: "80250-930",
  },
  mapsUrl: "https://www.google.com/maps/place/Docg+Hiperzoo+Shopping+Curitiba/@-25.441696,-49.2765942,17z",
  mapsEmbed:
    "https://www.google.com/maps?q=Docg+Hiperzoo+Shopping+Curitiba,+Rua+Brigadeiro+Franco,+2300,+Curitiba&output=embed&z=16",
  rating: { value: "4,8", count: 66 },
  hours: [
    { day: "Segunda a sexta", time: "10h às 22h" },
    { day: "Sábado", time: "10h às 22h" },
    { day: "Domingo", time: "14h às 20h" },
  ],
};

export const services = [
  {
    title: "Banho em banheira vitoriana",
    text: "Banho elegante e confortável, com água na temperatura certa e sem pressa.",
    icon: "bath",
  },
  {
    title: "Banho e tosa Super Premium",
    text: "Produtos Docg Super Premium, escolhidos pelo tipo de pelo do seu pet.",
    icon: "scissors",
  },
  {
    title: "Groomers especialistas",
    text: "Profissionais treinados que conhecem cada raça e cada jeitinho.",
    icon: "star",
  },
  {
    title: "Cronograma capilar",
    text: "Tratamento, nutrição e recuperação do pelo com a linha Expert.",
    icon: "sparkles",
  },
  {
    title: "Higiene bucal",
    text: "Cuidado e higienização da boca pra deixar o hálito em dia.",
    icon: "tooth",
  },
  {
    title: "Hidratação de patinhas e focinho",
    text: "Patas e focinho macios, protegidos do ressecamento.",
    icon: "paw",
  },
];

export const steps = [
  {
    title: "Chama no WhatsApp",
    text: "Conta pra gente a raça, o tamanho e o que você quer. A gente encaixa o melhor horário.",
  },
  {
    title: "Deixa o pet com a gente",
    text: "Ambiente livre e tranquilo, sem gaiola. Ele fica solto enquanto espera a vez.",
  },
  {
    title: "Busca ele cheiroso",
    text: "Pelo macio, bandana nova e aquela carinha de quem curtiu o spa.",
  },
];

export const reviews = [
  {
    name: "Sabrina Cardoso",
    meta: "Local Guide no Google",
    text: "O Michael atende meus dogs há quase dois anos! Mesmo morando longe, não troco de local. Um dos meus dogs é um Samoieda e o pelo dele fica maravilhoso. Recomendo de olhos fechados!",
  },
  {
    name: "Gabriela F.",
    meta: "Avaliação no Google",
    text: "Só levo a minha shih tzu na Docg HiperZoo do Shopping Curitiba e agradeço pelo cuidado do Michael e Gustavo! Ambos fazem um excelente trabalho e são extremamente atenciosos.",
  },
  {
    name: "João Mello",
    meta: "Avaliação no Google",
    text: "Quero agradecer à Patrícia e ao Maicon pelo cuidado e empatia. Super recomendo. Local com capricho e zelo com os pets.",
  },
];

export const gallery = [
  { image: "/pets/samoieda.webp", alt: "Samoieda branco escovado depois do banho, com bandana turquesa" },
  { image: "/pets/golden-banho.webp", alt: "Golden retriever tomando banho de espuma em banheira vitoriana" },
  { image: "/pets/shihtzu.webp", alt: "Shih tzu com tosa nova e lacinho" },
  { image: "/pets/spitz.webp", alt: "Spitz alemão com tosa arredondada sentado numa toalha" },
  { image: "/pets/poodle-secagem.webp", alt: "Poodle sendo secado com toalha pelo groomer" },
  { image: "/pets/bulldog.webp", alt: "Bulldog francês de bandana colorida depois do banho" },
];
