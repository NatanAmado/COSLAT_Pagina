export type ProjectItem = {
  name: string;
  status: string;
  focus: string;
  description: string;
  color: string;
  link?: string;
};

export let projects: ProjectItem[] = [
  {
    name: "Nodo de Cómputo Distribuido",
    status: "Idea",
    focus: "Infraestructura",
    description: "Diseñar una red de cómputo comunitaria para compartir capacidad y autonomía.",
    color: "border-coslat-accent text-coslat-accent",
    link: "https://discord.gg/X4bqQfmdv",
  },
  {
    name: "Tooling IA en Español",
    status: "Idea",
    focus: "Software",
    description: "Crear herramientas y modelos abiertos en español para la región.",
    color: "border-coslat-blue text-coslat-blue",
    link: "https://discord.gg/X4bqQfmdv",
  },
  {
    name: "Kit de Hardware Libre",
    status: "Idea",
    focus: "Hardware",
    description: "Prototipos replicables de hardware soberano con documentación abierta.",
    color: "border-coslat-dark text-coslat-dark",
    link: "https://discord.gg/X4bqQfmdv",
  },
  {
    name: "Diseño de contenido para redes de COSLAT",
    status: "",
    focus: "Divulgación",
    description: "Campañas y piezas visuales para difundir la visión del colectivo.",
    color: "border-coslat-accent text-coslat-accent",
    link: "https://discord.gg/X4bqQfmdv",
  },
  {
    name: "Mejora continua del sitio COSLAT",
    status: "",
    focus: "Web",
    description: "Iterar el sitio con nuevas secciones, accesibilidad y mejoras visuales.",
    color: "border-coslat-blue text-coslat-blue",
    link: "https://github.com/NatanAmado/COSLAT_Pagina",
  },
];

export function addProject(item: ProjectItem) {
  projects = [...projects, item];
}

export function replaceProjects(next: ProjectItem[]) {
  projects = next;
}
