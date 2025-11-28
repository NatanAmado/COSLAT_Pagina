export type EventItem = {
  title: string;
  date: string;
  location: string;
  tag: string;
  link?: string;
};

export let events: EventItem[] = [
  {
    title: "Conversatorio: IA, futuro del trabajo e imperialismo de datos en Latinoamérica",
    date: "30 NOV 2025",
    location: "Online (Discord)",
    tag: "conversatorio",
    link: "https://discord.gg/QrcXbnB2M?event=1443318360073965609",
  },
];

export function addEvent(item: EventItem) {
  events = [...events, item];
}

export function replaceEvents(next: EventItem[]) {
  events = next;
}
