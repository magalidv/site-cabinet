"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function DevisPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Message envoyé !");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-2xl mx-auto py-20 px-6">
        <h1 className="mb-6">Demande de devis</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            className="border p-3"
            placeholder="Nom"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="border p-3"
            placeholder="Entreprise"
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />

          <textarea
            className="border p-3 h-40"
            placeholder="Votre besoin"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button className="btn">
            Envoyer
          </button>

        </form>
      </div>
    </>
  );
}