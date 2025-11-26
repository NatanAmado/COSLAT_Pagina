export type EventItem = {
  title: string;
  date: string;
  location: string;
  tag: string;
};

export const events: EventItem[] = [
  { title: "Conversatorio de Autonomía Digital", date: "15 JUN 2024", location: "Online", tag: "charla" },
  { title: "Taller de Hardware Libre", date: "22 JUN 2024", location: "Buenos Aires", tag: "taller" },
  { title: "Mesa Abierta de Gobernanza", date: "29 JUN 2024", location: "Online", tag: "debate" },
];
