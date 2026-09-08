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
      title: "Analyse de la chaîne de valeur (VSM)",
      image: "/accueil/solution1.jpg",
      content:
        "Cartographiez vos flux de production pour identifier rapidement les gaspillages, les temps d'attente et les activités sans valeur ajoutée. Un état des lieux objectif pour prioriser les actions à fort impact.",
      position: "object-[50%_60%]",
    },
    {
      title: "Diagnostic de maturité Lean",
      image: "/accueil/solution2.jpg",
      content:
        "Évaluez le niveau de maturité Lean de votre organisation sur l'ensemble de vos processus. Un diagnostic structuré pour savoir exactement où agir en priorité et construire une feuille de route réaliste.",
      position: "object-[50%_70%]",
    },
    {
      title: "Animation de la performance",
      image: "/accueil/solution3.jpg",
      content:
        "Mettez en place des routines de pilotage efficaces : indicateurs visuels, points d'équipe structurés, tableaux de bord terrain. Votre activité pilotée au quotidien, par vos équipes.",
      position: "object-[50%_30%]",
    },
    {
      title: "Culture Lean terrain",
      image: "/accueil/solution4.jpg",
      content:
        "Ancrez les bons réflexes dans vos équipes grâce à des formations terrain, des chantiers Kaizen et un accompagnement au changement. Une culture de l'amélioration continue qui dure au-delà de la mission.",
      position: "object-[50%_70%]",
    },
    {
      title: "Amélioration de la productivité",
      image: "/accueil/solution5.jpg",
      content:
        "Identifiez et éliminez les pertes de productivité sur vos lignes de production : goulots d'étranglement, micro-arrêts, déséquilibres de charge. Des gains concrets mesurés dès les premières semaines.",
      position: "object-center",
    },
    {
      title: "Optimisation des implantations",
      image: "/accueil/solution6.jpg",
      content:
        "Réorganisez vos ateliers pour fluidifier vos flux physiques, réduire les distances parcourues et libérer de la surface exploitable. Une implantation pensée pour la performance et les conditions de travail.",
      position: "object-[50%_40%]",
    },
    {
      title: "Gestion de projets industriels",
      image: "/accueil/solution7.jpg",
      content:
        "Pilotage structuré de vos projets de transformation industrielle : définition du périmètre, plan d'action, suivi des jalons et animation des équipes. Des projets menés jusqu'à leur résultat.",
      position: "object-[50%_80%]",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">

        <div className="absolute inset-0 bg-[url('/banniere/banniere4.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative text-white px-6">

          {/* H1 UNIQUE — mot-clé principal + localisation */}
          <h1 className="mb-6">
            Consultant Lean Management & Amélioration Continue
          </h1>

          <p className="max-w-xl mx-auto text-lg mb-8 text-light drop-shadow-md">
            J&apos;accompagne les entreprises industrielles dans l&apos;optimisation de leurs
            processus de production — avec une approche terrain, pragmatique et
            orientée résultats.
          </p>

          <Link href="/contact" className="btn">
            Parlons de votre projet
          </Link>

        </div>
      </section>

      {/* ── SECTION 1 : PRÉSENTATION ─────────────────────────────────────── */}
      <section className="section">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            {/* H2 (pas H1 — un seul H1 par page) */}
            <h2 className="text-primary mb-6">
              Un accompagnement ancré dans la réalité industrielle
            </h2>

            <p className="mb-6 text-gray-700">
              RD Conseil Lean est un cabinet de conseil indépendant spécialisé
              en Lean Management et excellence opérationnelle. Basé en Savoie,
              j&apos;interviens auprès de PME et ETI industrielles en
              Auvergne-Rhône-Alpes.
            </p>

            <p className="mb-6 text-gray-700">
              Avec plus de 10 ans d&apos;expérience terrain — ingénieur production,
              supply chain, responsable multi-sites — je connais les contraintes
              industrielles de l&apos;intérieur. Mon objectif : générer des résultats
              durables, à moindre coût, avec vos équipes.
            </p>

            <Link href="/cabinet" className="bg-accent text-white px-6 py-3 rounded shadow hover:opacity-90 transition">
              Découvrir le cabinet
            </Link>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/accueil/pexels-ingenieur.jpg"
              alt="Consultant Lean Manufacturing en intervention terrain dans un atelier industriel"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ── SECTION 2 : SOLUTIONS SUR-MESURE ─────────────────────────────── */}
      <section className="section section-divider bg-light">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="/accueil/pexels-dos.jpg"
              alt="Analyse des flux de production Lean Manufacturing"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-primary mb-4">
              Des solutions adaptées à votre contexte, pour des résultats durables
            </h2>

            <p className="mb-6 text-gray-700">
              Chaque entreprise a ses propres enjeux, ses propres contraintes.
              C&apos;est pourquoi je ne déploie pas de méthode standard : j&apos;analyse
              votre situation, j&apos;identifie les leviers à fort impact et je
              construis avec vous un plan d&apos;action concret et réaliste.
            </p>

            <p className="mb-6 text-gray-700">
              VSM, 5S, TPM, SMED, CONWIP, animation de la performance… les
              outils sont choisis selon votre contexte, pas l&apos;inverse.
            </p>

            <Link
              href="/expertise"
              className="bg-accent text-white px-6 py-3 rounded shadow hover:opacity-90 transition"
            >
              Mon expertise
            </Link>
          </div>

        </div>
      </section>

      {/* ── SECTION SOLUTIONS INTERACTIVE ────────────────────────────────── */}
      <section className="section section-divider">

        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-accent text-3xl mb-16 px-6">
            Mes solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 bg-primary">

            {/* MENU GAUCHE */}
            <div className="flex flex-col justify-center px-6">
              {solutions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 py-5 border-b border-white/20 text-left transition
                    ${active === i ? "text-white" : "text-white/50 hover:text-white"}
                  `}
                >
                  <span>{s.title}</span>
                  <span className="text-lg">→</span>
                </button>
              ))}
            </div>

            {/* CONTENU DROITE */}
            <div className="grid grid-rows-2 h-full">

              <div className="bg-white p-10 flex flex-col justify-center">
                <h3 className="text-primary mb-4 text-xl">
                  {solutions[active].title}
                </h3>
                <p className="text-gray-700">
                  {solutions[active].content}
                </p>
              </div>

              <div className="relative h-[300px] md:h-full overflow-hidden">
                {solutions.map((s, i) => (
                  <Image
                    key={i}
                    src={s.image}
                    alt={`${s.title} — mission Lean Manufacturing RD Conseil Lean`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`
                      absolute inset-0 object-cover ${s.position}
                      transition-opacity duration-300
                      ${active === i ? "opacity-100" : "opacity-0"}
                    `}
                  />
                ))}
              </div>

            </div>

          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 mt-12 text-center">
          <h3 className="text-primary mb-4">
            Envie de découvrir toutes mes solutions en détail ?
          </h3>

          <p className="text-gray-700 mb-6">
            Chaque solution est conçue pour générer des résultats concrets et mesurables,
            adaptés à vos enjeux spécifiques.
          </p>

          <Link
            href="/solutions"
            className="bg-accent text-white px-6 py-3 rounded shadow hover:opacity-90 transition"
          >
            Voir toutes mes solutions
          </Link>
        </div>
      </section>

      {/* ── SECTION CYCLE / ACCOMPAGNEMENT ───────────────────────────────── */}
      <section className="section section-divider">

        <div className="absolute top-0 left-0 w-full h-32 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center mb-24">

            <span className="text-accent uppercase tracking-[0.25em] text-xl">
              Mon accompagnement
            </span>

            <h2 className="text-primary mt-5 mb-6">
              Une démarche structurée pour une performance durable
            </h2>

            <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
              De l&apos;analyse terrain jusqu&apos;au pilotage des résultats,
              chaque étape s&apos;inscrit dans une logique de progression continue
              et d&apos;autonomisation de vos équipes.
            </p>

          </div>

          {/* CYCLE EN 6 ÉTAPES */}
          <div className="relative">

            <div className="hidden lg:block absolute top-[72px] left-[8%] right-[8%] h-[2px] bg-primary/10" />
            <div className="lg:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-primary/10" />

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-14 lg:gap-6">

              {[
                "Analyser les flux",
                "Identifier les priorités",
                "Déployer les indicateurs",
                "Déployer des solutions",
                "Structurer les standards",
                "Ancrer la performance",
              ].map((step, index) => (

                <div
                  key={index}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="relative z-10 w-36 h-36 rounded-full bg-white border border-primary/10 shadow-lg flex flex-col items-center justify-center transition duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-accent/30">
                    <span className="text-accent text-sm tracking-widest mb-2">
                      0{index + 1}
                    </span>
                    <h3 className="text-primary text-lg leading-snug px-4">
                      {step}
                    </h3>
                  </div>
                </div>

              ))}

            </div>

          </div>

          {/* CITATION */}
          <div className="mt-28 max-w-5xl mx-auto">

            <div className="bg-primary rounded-[32px] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">

              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

              <div className="relative z-10">

                <p className="text-white text-xl md:text-2xl leading-relaxed">
                  <span className="text-accent font-semibold">
                    La performance industrielle ne repose pas uniquement sur les outils.
                  </span>
                </p>

                <br />

                <p className="text-white text-sm md:text-sm leading-relaxed">
                  Elle se construit grâce à la cohérence entre les méthodes,
                  les équipes, l&apos;organisation et les pratiques terrain.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION CTA CONTACT ───────────────────────────────────────────── */}
      <section className="section section-divider py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/accueil/pexels-presentation.jpg"
              alt="Consultation Lean Management avec un directeur industriel"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-primary mb-4">
              Un projet ? Une question ?
            </h2>

            <p className="text-gray-700 mb-6">
              Discutons ensemble de vos enjeux industriels et identifions les
              leviers d&apos;amélioration adaptés à votre situation.
            </p>

            <p className="text-gray-700 mb-8">
              J&apos;interviens en Savoie, en Auvergne-Rhône-Alpes.
              Premier échange sans engagement — réponse sous 48h.
            </p>

            <Link
              href="/contact"
              className="bg-accent text-white px-6 py-3 rounded shadow hover:opacity-90 transition"
            >
              Me contacter
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
