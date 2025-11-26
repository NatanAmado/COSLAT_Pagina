import Link from "next/link";
import Image from "next/image";
import { Cpu, Globe, Users, Target, Menu, CalendarRange, FolderGit2 } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { name: "INICIO", href: "#hero", icon: <Globe size={20} /> },
    { name: "PRINCIPIOS", href: "#principios", icon: <Cpu size={20} /> },
    { name: "ESTRUCTURA", href: "#estructura", icon: <Users size={20} /> },
    { name: "FINES", href: "#fines", icon: <Target size={20} /> },
    { name: "EVENTOS", href: "/eventos", icon: <CalendarRange size={20} /> },
    { name: "PROYECTOS", href: "/proyectos", icon: <FolderGit2 size={20} /> },
  ];

  return (
    <aside className="fixed left-0 top-0 z-50 h-16 w-full md:h-screen md:w-64 bg-coslat-blue text-white border-r-4 border-coslat-yellow flex flex-row md:flex-col justify-between p-6">
      <div className="flex items-center md:items-start gap-3 md:gap-2">
        <div className="relative w-12 h-12 md:w-16 md:h-16">
          <Image src="/coslat_logo.svg" alt="COSLAT logo" fill priority className="object-contain" />
        </div>
        <div className="flex flex-col gap-1">

          <p className="hidden md:block text-xs font-mono opacity-80">
            COLECTIVO POR LA<br/>SOBERANÍA LATINOAMERICANA<br/>DEL FUTURO
          </p>
        </div>
      </div>

      <nav className="hidden md:flex flex-col gap-6 mt-12">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="flex items-center gap-3 font-pixel text-2xl hover:text-coslat-yellow hover:translate-x-2 transition-transform duration-200"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block mt-auto">
        <div className="border-2 border-white p-2 text-center hover:bg-white hover:text-coslat-blue cursor-pointer transition-colors">
          <span className="font-pixel text-xl">ÚNETE A LA CAUSA</span>
        </div>
      </div>
      
      {/* Mobile Menu Icon (Placeholder) */}
      <div className="md:hidden flex items-center">
        <Menu size={32} />
      </div>
    </aside>
  );
}
