"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(0);

  const solutions = [
    {
      title: "Analyse de la chaîne de valeur",
      content:
        "Identifiez rapidement vos pertes et activez des gains concrets.",
      position: "object-[50%_60%]",
    },
    {
      title: "Diagnostic de maturité Lean",
      content:
        "Sachez exactement où agir pour progresser efficacement.",
      position: "object-[50%_70%]",
    },
    {
      title: "Animation de la performance",
      content:
        "Pilotez votre activité au quotidien.",
      position: "object-[50%_30%]",
    },
    {
      title: "Culture Lean terrain",
      content:
        "Ancrez les bons réflexes.",
      position: "object-[50%_70%]",
    },
    {
      title: "Amélioration de la productivité",
      content:
        "Optimisation concrète de vos performances industrielles.",
      position: "object-center",
    },
        {
      title: "Optimisation des implantations",
      content:
        "Optimisation des flux et des surfaces existantes.",
      position: "object-[50%_40%]",
    },
    {
      title: "Gestion de projets industriels",
      content:
        "Pilotage structuré de vos projets stratégiques.",
      position: "object-[50%_80%]",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="relative h-[60vh] flex items-center justify-center text-center">

        <div className="absolute inset-0 bg-[url('/banniere/banniere4.jpg')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative text-white px-6">
          <h1 className="mb-6">
            Amélioration continue & performance industrielle
          </h1>

          <p className="max-w-xl mx-auto text-lg mb-8 text-light drop-shadow-md">
            Optimisez vos processus de production et gagnez en rentabilité grâce à une approche lean pragmatique.
          </p>

          <Link href="/contact" className="btn">
            Demander un accompagnement
          </Link>
        </div>
      </section>

         {/* SECTION 1 */}
      <section className="section">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-primary mb-6">
              Un partenaire pour accompagner votre développement
            </h1>

            <p className="mb-6 text-gray-700">
              Un accompagnement spécialisé dans l’excellence opérationnelle pour les entreprises pour 
              leurs projets de transformation et d’amélioration continue, avec une priorité : 
              créer de la valeur durable pour votre activité. 
            </p>

            <a
              href="/notre-cabinet/qui-sommes-nous"
              className="bg-accent text-white px-6 py-3 rounded shadow hover:opacity-90 transition"
            >
              Découvrir le cabinet
            </a>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image src="/accueil/pexels-ingenieur.jpg" alt="" fill className="object-cover" />
          </div>

        </div>
      </section>

      {/* SECTION 2 */}
      <section className="section section-divider bg-light">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image src="/accueil/pexels-dos.jpg" alt="" fill className="object-cover" />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-primary mb-4">
              Des solutions sur-mesure à votre besoin et durables
            </h2>

            <p className="mb-6 text-gray-700">
              Vous cherchez à gagner en productivité, structurer vos opérations ou accélérer votre transformation Lean ? 
            <br /> Je vous accompagne avec une approche terrain, pragmatique et orientée résultats. </p> 

            <a href="/savoir-faire/expertise"
            className="bg-accent text-white px-6 py-3 rounded shadow hover:opacity-90 transition">
              Notre expertise
            </a>
          </div>

        </div>
      </section>

      {/* SECTION SOLUTIONS INTERACTIVE */}
      <section className="section section-divider">

        <div className="max-w-[1400px] mx-auto">

          {/* TITRE */}
          <h2 className="text-accent text-3xl mb-16 px-6">
            Nos solutions
          </h2>

          {/* GRID PRINCIPALE */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-primary">

            {/* ===== MENU GAUCHE ===== */}
            <div className="flex flex-col justify-center px-6">

              {solutions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 py-5 border-b border-white/20 text-left transition
                    ${active === i ? "text-white" : "text-white/50 hover:text-white"}
                  `}
                >
                  {/* TEXTE */}
                  <span>{s.title}</span>

                  {/* FLECHE */}
                  <span className="text-lg">
                    →
                  </span>
                </button>
              ))}

            </div>

            {/* ===== CONTENU DROITE ===== */}
            <div className="grid grid-rows-2 h-full">

              {/* TEXTE */}
              <div className="bg-white p-10 flex flex-col justify-center">
                <h3 className="text-primary mb-4 text-xl">
                  {solutions[active].title}
                </h3>

                <p className="text-gray-700">
                  {solutions[active].content}
                </p>
              </div>

              {/* IMAGE */}
              <div className="relative h-[300px] md:h-full">
                <Image
                  src={`/accueil/solution${active + 1}.jpg`}
                  alt=""
                  fill
                  className={`object-cover ${solutions[active].position}`}
                />
              </div>

            </div>

          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 mt-12 text-center">
            <h3 className="text-primary mb-4">
              Envie de découvrir nos solutions en détail ?
            </h3>

            <p className="text-gray-700 mb-6">
              Nous proposons une gamme complète de solutions d’amélioration continue adaptées à vos besoins spécifiques. Chaque solution est conçue pour générer des résultats concrets rapidement, sans complexifier votre organisation.
            </p>

            <a
              href="/contact"
              className="bg-accent text-white px-6 py-3 rounded shadow hover:opacity-90 transition"
            >
              Voir toutes nos solutions
            </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-divider py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image src="/accueil/pexels-presentation.jpg" alt="" fill className="object-cover" />
          </div>

          {/* TEXTE */}
          <div>
            <h2 className="text-primary mb-4">
              Un projet ? Une question ?
            </h2>

            <p className="text-gray-700 mb-6">
              Discutons ensemble de vos enjeux industriels et identifions les leviers
              d’amélioration adaptés à votre situation.
            </p>

            <a
              href="/contact"
              className="bg-accent text-white px-6 py-3 rounded shadow hover:opacity-90 transition"
            >
              Nous contacter
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}