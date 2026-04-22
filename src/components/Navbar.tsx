"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="bg-light border-b border-soft relative z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}

        <Link href="/" className="object-contain hover:opacity-80 transition flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-10 text-sm">

          {/* Notre cabinet */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-accent transition">
              Notre cabinet
            </span>

            <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white shadow-lg p-4 flex flex-col gap-2 min-w-[220px]">
                <Link href="/notre-cabinet/qui-sommes-nous">Qui sommes-nous</Link>
                <Link href="/notre-cabinet/engagements">Nos engagements</Link>
              </div>
            </div>
          </div>

          {/* Savoir-faire */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-accent transition">
              Savoir-faire
            </span>

            <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white shadow-lg p-4 flex flex-col gap-2 min-w-[220px]">
                <Link href="/savoir-faire/realisations">Nos réalisations</Link>
                <Link href="/savoir-faire/outils">Nos outils</Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-accent transition">
              Contact
            </span>

            <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white shadow-lg p-4 flex flex-col gap-2 min-w-[220px]">
                <Link href="/contact">Informations</Link>
                <Link href="/contact/devis">Demande de devis</Link>
              </div>
            </div>
          </div>

        </div>

        {/* BURGER */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobile(!mobile)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          mobile ? "max-h-96 p-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-sm">
          <Link href="/notre-cabinet/qui-sommes-nous">Qui sommes-nous</Link>
          <Link href="/notre-cabinet/engagements">Nos engagements</Link>
          <Link href="/savoir-faire/realisations">Nos réalisations</Link>
          <Link href="/savoir-faire/outils">Nos outils</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}