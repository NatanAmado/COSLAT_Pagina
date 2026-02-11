export type EventItem = {
  title: string;
  date: string;
  location: string;
  tag: string;
  link?: string;
};

export const events: EventItem[] = [
  {
    title: "Reunión introductoria",
    date: "15 FEB 2026 · 5:00 PM",
    location: "Online (Discord)",
    tag: "reunión",
    link: "https://discord.gg/ZxyxBB4Z?event=1471181149937078433",
  },
  {
    title: "Conversatorio: IA, futuro del trabajo e imperialismo de datos en Latinoamérica",
    date: "30 NOV 2025",
    location: "Online (Discord)",
    tag: "conversatorio",
    link: "https://discord.gg/QrcXbnB2M?event=1443318360073965609",
  },
];
