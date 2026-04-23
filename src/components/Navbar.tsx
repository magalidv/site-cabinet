"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const timeoutRef = useRef<any>(null);

  const openMenu = (menu: string) => {
    clearTimeout(timeoutRef.current);
    setActive(menu);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 200); // 👈 délai = UX smooth
  };

  return (
    <nav className="bg-white border-b border-soft relative z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="object-contain hover:opacity-80 transition flex items-center">
          <Image
            src="/logo_w.png"
            alt="Logo"
            width={140}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* MENU */}
      <div
          className="hidden md:flex gap-8 items-center text-sm relative"
          onMouseLeave={closeMenu}
        >

          {/* NOTRE CABINET */}
          <div onMouseEnter={() => openMenu("cabinet")}>
            <span className="cursor-pointer px-3 py-2 rounded hover:bg-light transition">
              Notre cabinet
            </span>
          </div>

          {/* SAVOIR FAIRE */}
          <div onMouseEnter={() => openMenu("sf")}>
            <span className="cursor-pointer px-3 py-2 rounded hover:bg-light transition">
              Savoir-faire
            </span>
          </div>

          {/* CONTACT CTA (NOUVEAU STYLE) */}
          <Link
            href="/contact"
            className="bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition"
          >
            Contact
          </Link>

          {/* MEGA MENU */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[720px] transition-all duration-300 ${
              active
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
            onMouseEnter={() => clearTimeout(timeoutRef.current)}
          >

            {/* BUFFER ZONE invisible */}
            <div className="h-4 w-full" />

            <div className="bg-white rounded-xl shadow-2xl p-8">

              {/* CABINET */}
              {active === "cabinet" && (
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-accent mb-4">Présentation</h3>
                    <ul className="space-y-2">
                      <li><Link href="/notre-cabinet/qui-sommes-nous" className="nav-link">Qui sommes-nous</Link></li>
                      <li><Link href="/notre-cabinet/engagements" className="nav-link">Nos engagements</Link></li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">
                      Accompagnement des industriels dans l’amélioration continue et la performance.
                    </p>
                  </div>
                </div>
              )}

              {/* SAVOIR FAIRE */}
              {active === "sf" && (
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-accent mb-4">Expertises</h3>
                    <ul className="space-y-2">
                      <li><Link href="/savoir-faire/realisations" className="nav-link">Nos réalisations</Link></li>
                      <li><Link href="/savoir-faire/outils" className="nav-link">Nos outils</Link></li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">
                      Lean management, optimisation des flux et gains de productivité.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        <button className="md:hidden text-2xl">☰</button>

      </div>
    </nav>
  );
}