"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-soft relative z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          href="/"
          className="object-contain hover:opacity-80 transition flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={30}
            className="object-contain"
          />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-4 items-center">

          <Link
            href="/cabinet"
            className="px-4 py-2 rounded hover:bg-light transition"
          >
            Le cabinet
          </Link>

          <Link
            href="/vision"
            className="px-4 py-2 rounded hover:bg-light transition"
          >
            Notre vision
          </Link>

          <Link
            href="/expertise"
            className="px-4 py-2 rounded hover:bg-light transition"
          >
            Expertise
          </Link>

          <Link
            href="/solutions"
            className="px-4 py-2 rounded hover:bg-light transition"
          >
            Solutions
          </Link>

          <Link
            href="/realisations"
            className="px-4 py-2 rounded hover:bg-light transition"
          >
            Realisations
          </Link>

          

          {/* CTA CONTACT */}
          <Link
            href="/contact"
            className="bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition"
          >
            Contact
          </Link>

        </div>

        {/* BURGER */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* MENU MOBILE */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 p-6 md:hidden">

            <Link
              href="/cabinet"
              onClick={() => setOpen(false)}
              className="hover:text-accent transition"
            >
              Le cabinet
            </Link>

            <Link
              href="/vision"
              onClick={() => setOpen(false)}
              className="hover:text-accent transition"
            >
              Notre vision
            </Link>

            <Link
              href="/solutions"
              onClick={() => setOpen(false)}
              className="hover:text-accent transition"
            >
              Solutions
            </Link>

            <Link
              href="/expertise"
              onClick={() => setOpen(false)}
              className="hover:text-accent transition"
            >
              Expertise
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-accent text-white px-4 py-2 rounded w-fit"
            >
              Contact
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
}