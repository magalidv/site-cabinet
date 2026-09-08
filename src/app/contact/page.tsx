"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.email !== form.confirmEmail) {
      return setError("Les adresses email ne correspondent pas.");
    }

    if (!form.consent) {
      return setError("Merci d'accepter le traitement de vos données pour envoyer votre message.");
    }

    setError("");
    setLoading(true);

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      {/* ── EN-TÊTE ───────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="mb-12 text-left text-primary">
          Parlons de votre projet
        </h1>

        {/* SECTION IMAGE + TEXTE */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/contact/image_ecoute.png"
              alt="Consultant Lean Manufacturing à l'écoute de vos enjeux industriels"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXTE */}
          <div>
            <h2 className="text-primary mb-6 text-2xl">
              Un premier échange, sans engagement
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Vous avez une problématique industrielle à résoudre, un projet
              de transformation à structurer ou simplement envie d&apos;explorer
              les pistes d&apos;amélioration disponibles dans votre organisation ?
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Remplissez le formulaire ci-dessous ou contactez-moi directement.
              Je reviens vers vous sous <strong>48h ouvrées</strong>.
            </p>

            {/* COORDONNÉES */}
            <div className="space-y-3 mb-6">

              <div className="flex items-center gap-3">
                <span className="text-accent font-semibold">Tél.</span>
                <a
                  href="tel:+33785882012"
                  className="text-gray-700 hover:text-accent transition"
                >
                  07 85 88 20 12
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-accent font-semibold">Email</span>
                <a
                  href="mailto:contact@rd-conseil-lean.fr"
                  className="text-gray-700 hover:text-accent transition"
                >
                  contact@rd-conseil-lean.fr
                </a>
              </div>

  
              <div className="flex items-center gap-3">
                <span className="text-accent font-semibold">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/rémy-dumoulin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-accent transition"
                >
                  Rémy Dumoulin
                </a>
              </div>

            </div>

            <p className="text-sm text-gray-500">
              Basé en Savoie · Interventions en Auvergne-Rhône-Alpes
            </p>

          </div>
        </div>
      </div>

      {/* ── FORMULAIRE ───────────────────────────────────────────────────── */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-4xl mx-auto text-white">

          <h2 className="text-accent mb-8">Formulaire de contact</h2>

          {/* MESSAGE DE CONFIRMATION */}
          {submitted ? (
            <div className="bg-white/10 border border-accent/40 rounded-xl p-10 text-center">
              <p className="text-accent text-2xl font-medium mb-4">
                Message bien reçu !
              </p>
              <p className="text-white/80 leading-relaxed">
                Merci pour votre message. Je reviens vers vous sous 48h ouvrées
                pour échanger sur votre projet.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  className="p-3 rounded text-black"
                  placeholder="Votre nom et prénom *"
                  required
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="p-3 rounded text-black"
                  placeholder="Votre entreprise"
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  className="p-3 rounded text-black"
                  placeholder="Votre adresse email *"
                  required
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  type="email"
                  className="p-3 rounded text-black"
                  placeholder="Confirmez votre email *"
                  required
                  onChange={(e) => setForm({ ...form, confirmEmail: e.target.value })}
                />
              </div>

              <input
                className="p-3 rounded text-black"
                placeholder="Votre numéro de téléphone"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <textarea
                className="p-3 rounded text-black h-36"
                placeholder="Décrivez votre besoin ou votre projet (contexte, enjeux, objectifs) *"
                required
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              {/* CONSENTEMENT RGPD */}
              <label className="flex items-start gap-3 text-sm text-white/90">
                <input
                  type="checkbox"
                  required
                  className="mt-1 flex-shrink-0"
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                />
                <span>
                  J&apos;accepte que les informations saisies dans ce formulaire soient
                  utilisées par RD Conseil Lean afin de répondre à ma demande et
                  de me recontacter dans le cadre de la relation commerciale pouvant
                  en découler. Pour en savoir plus sur la gestion de vos données et
                  exercer vos droits, consultez notre{" "}
                  <Link
                    href="/politique-confidentialite"
                    className="text-accent underline hover:opacity-80 transition"
                  >
                    politique de confidentialité
                  </Link>.
                </span>
              </label>

              {/* MESSAGE D'ERREUR */}
              {error && (
                <p className="text-red-300 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-accent text-white py-3 rounded hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Envoi en cours..." : "Envoyer mon message"}
              </button>

            </form>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}
