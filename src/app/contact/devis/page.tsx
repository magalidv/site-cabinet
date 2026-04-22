"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Devis() {
  const [form, setForm] = useState({});

  return (
    <>
    <Navbar />
          <section className="py-20 px-6 max-w-2xl mx-auto">
    <div className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="text-3xl mb-6">Demande de devis</h1>

      <form className="flex flex-col gap-4">
        <input placeholder="Entreprise" className="border p-3" />
        <input placeholder="Nom" className="border p-3" />
        <textarea placeholder="Votre besoin" className="border p-3 h-40" />

        <button className="bg-accent text-white p-3">
          Envoyer
        </button>
      </form>
    </div>
    </section>
    <Footer />
    </>
  );
}