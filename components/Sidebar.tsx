 "use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cpu, Globe, Users, Target, Menu, CalendarRange, FolderGit2, X } from "@/components/icons";
import type { Route } from "next";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navItems: { name: string; href: string; icon: JSX.Element }[] = [
    { name: "INICIO", href: "/", icon: <Globe size={20} /> },
    { name: "PRINCIPIOS", href: "#principios", icon: <Cpu size={20} /> },
    { name: "ESTRUCTURA", href: "#estructura", icon: <Users size={20} /> },
    { name: "FINES", href: "#fines", icon: <Target size={20} /> },
    { name: "EVENTOS", href: "/eventos", icon: <CalendarRange size={20} /> },
    { name: "PROYECTOS", href: "/proyectos", icon: <FolderGit2 size={20} /> },
  ];

  return (
    <aside className="fixed left-0 top-0 z-50 h-16 w-full md:h-screen md:w-64 bg-white text-coslat-blue border-r-4 border-coslat-yellow flex flex-row md:flex-col justify-between p-6">
      <div className="flex items-center md:items-start gap-3 md:gap-2">
        <Link href={"/" as Route} className="relative w-12 h-12 md:w-16 md:h-16 block">
          <Image src="/coslat_logo.svg" alt="COSLAT logo" fill priority className="object-contain" />
        </Link>
        <div className="flex flex-col gap-1">
          <p className="hidden md:block text-xs font-mono opacity-80">
            COLECTIVO POR LA<br/>SOBERANÍA LATINOAMERICANA<br/>DEL FUTURO
          </p>
        </div>
      </div>

      <nav className="hidden md:flex flex-col gap-6 mt-12">
        {navItems.map((item) => {
          const isHash = item.href.startsWith("#");
          return isHash ? (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 font-pixel text-2xl hover:text-coslat-yellow hover:translate-x-2 transition-transform duration-200"
            >
              {item.icon}
              {item.name}
            </a>
          ) : (
            <Link
              key={item.name}
              href={item.href as Route}
              className="flex items-center gap-3 font-pixel text-2xl hover:text-coslat-yellow hover:translate-x-2 transition-transform duration-200"
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="hidden md:block mt-auto">
        <a
          href="https://discord.gg/hsNkj4aWh8"
          target="_blank"
          rel="noreferrer"
          className="border-2 border-coslat-blue p-2 text-center hover:bg-coslat-blue hover:text-white cursor-pointer transition-colors block"
        >
          <span className="font-pixel text-xl">ÚNETE A LA CAUSA</span>
        </a>
      </div>
      
      {/* Mobile Menu */}
      <button
        aria-label="Toggle menu"
        className="md:hidden flex items-center"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-white border-t-4 border-coslat-yellow shadow-lg md:hidden">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => {
              const isHash = item.href.startsWith("#");
              const classes =
                "flex items-center gap-3 font-pixel text-xl text-coslat-blue hover:text-coslat-yellow transition-colors";
              return isHash ? (
                <a key={item.name} href={item.href} className={classes} onClick={() => setOpen(false)}>
                  {item.icon}
                  {item.name}
                </a>
              ) : (
                <Link key={item.name} href={item.href as Route} className={classes} onClick={() => setOpen(false)}>
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
            <a
              href="https://discord.gg/hsNkj4aWh8"
              target="_blank"
              rel="noreferrer"
              className="mt-2 border-2 border-coslat-blue p-2 text-center hover:bg-coslat-blue hover:text-white cursor-pointer transition-colors font-pixel text-lg"
              onClick={() => setOpen(false)}
            >
              ÚNETE A LA CAUSA
            </a>
          </div>
        </div>
      )}
    </aside>
  );
}
