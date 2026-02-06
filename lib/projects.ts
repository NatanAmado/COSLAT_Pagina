export type ProjectItem = {
  name: string;
  status: string;
  focus: string;
  color: string;
  link?: string;
};

export let projects: ProjectItem[] = [
  {
    name: "Nodo de Cómputo Distribuido",
    status: "Idea",
    focus: "Infraestructura",
    color: "border-coslat-accent text-coslat-accent",
    link: "https://discord.gg/X4bqQfmdv",
  },
  {
    name: "Tooling IA en Español",
    status: "Idea",
    focus: "Software",
    color: "border-coslat-blue text-coslat-blue",
    link: "https://discord.gg/X4bqQfmdv",
  },
  {
    name: "Kit de Hardware Libre",
    status: "Idea",
    focus: "Hardware",
    color: "border-coslat-dark text-coslat-dark",
    link: "https://discord.gg/X4bqQfmdv",
  },
  {
    name: "Diseño de contenido para redes de COSLAT",
    status: "",
    focus: "Divulgación",
    color: "border-coslat-accent text-coslat-accent",
    link: "https://discord.gg/X4bqQfmdv",
  },
  {
    name: "Mejora continua del sitio COSLAT",
    status: "",
    focus: "Web",
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
