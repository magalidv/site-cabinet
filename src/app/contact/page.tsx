"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    company: "",
    message: "",
    consent: false,
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // ✅ Validation simple
    if (form.email !== form.confirmEmail) {
      return setError("Les emails ne correspondent pas");
    }

    if (!form.consent) {
      return setError("Vous devez accepter le traitement des données");
    }

    setError("");

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Message envoyé !");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* H1 */}
        <h1 className="mb-12 text-left text-primary">Contact</h1>

        {/* SECTION IMAGE + TEXTE */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/contact/image_ecoute.jpg"
              alt="contactez_nous"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXTE */}
          <div>
            <h2 className="text-primary mb-4">
              Vous souhaitez échanger sur un projet au sein de votre organisation ou bénéficier d’un accompagnement dans votre transformation ?
            </h2>

            <h3 className="text-primary mb-4">
              Remplissez le formulaire de contact ci-dessous, notre équipe reviendra vers vous rapidement pour répondre à toutes vos questions.
            </h3>

            <p className="text-black">
              Vous pouvez aussi joindre notre équipe par téléphone au  <strong>02 44 76 03 60</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* FORMULAIRE FULL WIDTH */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-4xl mx-auto text-white">

          <h2 className="mb-8">Formulaire de contact</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              className="p-3 rounded text-black"
              placeholder="Nom"
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="email"
              className="p-3 rounded text-black"
              placeholder="Email"
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              type="email"
              className="p-3 rounded text-black"
              placeholder="Confirmez votre email"
              required
              onChange={(e) =>
                setForm({ ...form, confirmEmail: e.target.value })
              }
            />

            <input
              className="p-3 rounded text-black"
              placeholder="Téléphone"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <input
              className="p-3 rounded text-black"
              placeholder="Entreprise"
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />

            <textarea
              className="p-3 rounded text-black h-32"
              placeholder="Votre besoin"
              required
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            {/* CONSENTEMENT RGPD */}
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                onChange={(e) =>
                  setForm({ ...form, consent: e.target.checked })
                }
              />
              J’accepte que mes données soient utilisées pour être recontacté.
            </label>

            {/* ERREUR */}
            {error && <p className="text-red-300">{error}</p>}

            <button className="bg-accent text-white py-3 rounded hover:opacity-90 transition">
              Envoyer
            </button>

          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}