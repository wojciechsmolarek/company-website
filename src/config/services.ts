export interface ServiceItem {
  num: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: ServiceItem[] = [
  {
    num: "01",
    title: "Strony, ktore zarabiaja",
    description:
      "Projektujemy serwisy nastawione na konwersje. UX/UI dopasowany do sciezki zakupowej klienta B2B, maksymalizujacy ilosc zapytan ofertowych.",
    tags: ["Web Design", "Development", "UX Research"],
  },
  {
    num: "02",
    title: "SEO B2B",
    description:
      "Pozycjonujemy liderow. Tworzymy dedykowane strategie widocznosci, ktore buduja autorytet domeny i przyciagaja ruch intencyjny.",
    tags: ["Audyty SEO", "Link Building", "Optymalizacja tresci"],
  },
  {
    num: "03",
    title: "Utrzymanie WWW",
    description:
      "Stale wsparcie techniczne i optymalizacja wydajnosci, by Twoja strona zawsze dzialala bez zarzutu i byla bezpieczna.",
    tags: ["Security", "Updates", "Monitoring 24/7"],
  },
  {
    num: "04",
    title: "Nadzor nad migracjami",
    description:
      "Kompleksowe zarzadzanie procesem przenoszenia serwisu. Gwarantujemy zachowanie widocznosci w wynikach wyszukiwania po wdrozeniu nowej strony.",
    tags: ["Mapa przekierowan", "Testy", "Wdrozenie"],
  },
  {
    num: "05",
    title: "Strategia Content",
    description:
      "Tworzymy plany tresci eksperckich, ktore edukuja rynek, rozwiazuja problemy klientow i buduja wizerunek lidera branzy.",
    tags: ["Content Plan", "Copywriting", "Dystrybucja"],
  },
  {
    num: "06",
    title: "Audyty UX/UI",
    description:
      "Szczegolowa analiza uzytecznosci strony. Identyfikujemy bariery w konwersji i proponujemy rozwiazania zwiekszajace sprzedaz.",
    tags: ["Heatmaps", "User Testing", "Raportowanie"],
  },
];
