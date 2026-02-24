import ogImage from "../assets/og-image.png";

export const siteConfig = {
  name: "B2B Collective",
  description: "Kolektyw 3 ekspertow B2B: SEO, Web Development, Strategia. Wspolnie budujemy widocznosc Twojej firmy.",
  url: "https://b2bcollective.pl",
  lang: "pl",
  locale: "pl_PL",
  author: "B2B Collective",
  twitter: "@b2bcollective",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    discord: "https://discord.com",
    linkedin: "https://linkedin.com",
  },
  navLinks: [
    { text: "Eksperci", href: "/#eksperci" },
    { text: "Uslugi", href: "/#services" },
    { text: "Baza Wiedzy", href: "/#knowledge" },
    { text: "Kontakt", href: "/#contact" },
  ],
};
