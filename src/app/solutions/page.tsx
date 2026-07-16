"use client";


import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SolutionsPage() {
  const [active, setActive] = useState<number | null>(null);

  const cards = [
    {
      title: "Analyse de la chaîne de valeur (VSM)",
      subtitle: "Identifiez vos pertes et activez des gains concrets",
      short:
        "Comprendre pour mieux agir\n\nUne cartographie complète de vos flux de production (Value Stream Mapping) pour visualiser rapidement mais simplement où se cachent les gaspillages, les temps d'attente et les ruptures de flux.",
      detail: {
        intro:
          "Je réalise une analyse structurée de votre chaîne de valeur (VSM) pour identifier les leviers d'amélioration à fort impact — délais, surproduction, stocks, transports inutiles.",
        text: "Ce que vous obtenez :",
        list: [
          "Vision claire et partagée de vos flux actuels (état actuel) et cibles (état futur)",
          "Identification des 7 gaspillages et des activités sans valeur ajoutée",
          "Plan d'actions concret, priorisé et chiffré",
          "Base de travail pour structurer votre démarche Lean",
        ],
        outro:
          "La VSM est souvent le point de départ le plus efficace d'une démarche d'amélioration continue.",
      },
    },

    {
      title: "Diagnostic de maturité Lean",
      subtitle: "Sachez exactement où agir pour progresser efficacement",
      short:
        "Évaluer pour mieux progresser\n\nUn diagnostic structuré de votre organisation Lean pour évaluer votre niveau de maturité sur l'ensemble de vos processus et construire une feuille de route réaliste.",
      detail: {
        intro:
          "J'évalue votre organisation sur les dimensions clés du Lean : management visuel, standardisation, résolution de problèmes, culture d'amélioration continue, flux, qualité.",
        text: "Ce que vous obtenez :",
        list: [
          "Cartographie de votre maturité Lean par domaine",
          "Identification des leviers prioritaires à fort impact",
          "Feuille de route personnalisée et séquencée",
          "Point de départ clair pour avancer avec méthode",
        ],
        outro:
          "Un diagnostic honnête est la meilleure base pour ne pas disperser vos efforts.",
      },
    },

    {
      title: "Animation de la performance",
      subtitle: "Pilotez votre activité avec clarté et réactivité",
      short:
        "Piloter pour mieux décider\n\nMise en place de rituels de pilotage efficaces — indicateurs visuels, points d'équipe structurés, tableaux de bord terrain — pour que vos managers décident vite et bien.",
      detail: {
        intro:
          "Je conçois et déploie votre système d'animation de la performance : KPI pertinents, management visuel, routines courtes, escalade des problèmes.",
        text: "Ce que vous obtenez :",
        list: [
          "Indicateurs de performance (KPI) alignés sur vos objectifs réels",
          "Rituels d'animation courts et efficaces (5 à 15 min par jour)",
          "Détection rapide des dérives avant qu'elles deviennent critiques",
          "Équipes plus réactives, impliquées et responsabilisées",
        ],
        outro:
          "Un pilotage quotidien maîtrisé est le levier le plus durable de la performance industrielle.",
      },
    },

    {
      title: "Déploiement d'une culture Lean terrain",
      subtitle: "Ancrez des pratiques simples et efficaces dans vos équipes",
      short:
        "Structurer pour durer\n\nDéploiement des fondamentaux Lean directement sur le terrain : 5S, standards de travail, Kaizen, résolution de problèmes. Des pratiques que vos équipes s'approprient et font vivre.",
      detail: {
        intro:
          "Je vous accompagne dans l'ancrage opérationnel de la culture Lean : chantiers 5S, One Point Lessons, PDCA, formations courtes terrain, animation Kaizen.",
        text: "Ce que vous obtenez :",
        list: [
          "Environnement de travail organisé, propre et stable (5S)",
          "Standards de travail documentés et respectés",
          "Équipes formées à la résolution de problèmes (PDCA, DMAIC, A3)",
          "Culture d'amélioration continue ancrée dans les pratiques quotidiennes",
        ],
        outro:
          "La culture Lean est ce qui fait tenir les résultats dans le temps, bien après la mission.",
      },
    },

    {
      title: "Productivité & montée en cadence",
      subtitle: "Augmentez votre capacité sans investissement lourd",
      short:
        "Optimiser pour produire plus\n\nIntervention directe sur vos lignes pour identifier et éliminer les pertes de productivité : goulots d'étranglement, micro-arrêts, déséquilibres de charge, pannes récurrentes.",
      detail: {
        intro:
          "J'interviens sur vos lignes de production avec les outils adaptés : analyse des pertes (TRS), SMED pour réduire les changements de série, TPM pour fiabiliser vos équipements.",
        text: "Ce que vous obtenez :",
        list: [
          "Amélioration du TRS (Taux de Rendement Synthétique)",
          "Réduction des temps de changement de série (SMED)",
          "Diminution des pannes non planifiées (TPM, maintenance autonome)",
          "Augmentation de la capacité sans nouvel investissement",
        ],
        outro:
          "Des gains de productivité mesurés, documentés et durables.",
      },
    },

    {
      title: "Optimisation des surfaces et des flux",
      subtitle: "Fluidifiez vos flux sans investissement majeur",
      short:
        "Réorganiser pour mieux produire\n\nAnalyse des flux physiques et réorganisation de vos implantations pour réduire les distances parcourues, fluidifier la production et libérer de la surface exploitable.",
      detail: {
        intro:
          "J'analyse vos flux de production (diagramme spaghetti, analyse des déplacements) pour repenser l'organisation de vos ateliers et améliorer la performance globale.",
        text: "Ce que vous obtenez :",
        list: [
          "Réduction significative des déplacements et transports internes",
          "Surface libérée grâce à une organisation optimisée",
          "Amélioration de l'ergonomie et des conditions de travail",
          "Flux de production plus fluides et plus lisibles",
        ],
        outro:
          "Une implantation bien conçue génère des gains durables, sans investissement matériel.",
      },
    },

    {
      title: "Gestion de projets industriels",
      subtitle: "Sécurisez vos projets et maîtrisez vos délais",
      short:
        "Structurer pour réussir\n\nPilotage complet de vos projets de transformation industrielle : périmètre, jalons, risques, animation des équipes. Des projets menés jusqu'à leur résultat, dans les délais.",
      detail: {
        intro:
          "J'interviens en pilotage de projet industriel pour structurer la démarche, coordonner les équipes et garantir l'atteinte des objectifs (qualité, délais, coûts).",
        text: "Ce que vous obtenez :",
        list: [
          "Cadrage précis du projet : périmètre, objectifs, ressources, jalons",
          "Suivi rigoureux de l'avancement et détection précoce des risques",
          "Coordination efficace entre services et intervenants",
          "Projets livrés dans les délais, avec les résultats attendus",
        ],
        outro:
          "Un pilotage structuré est la différence entre un projet qui aboutit et un projet qui s'étire.",
      },
    },

    {
      title: "Flux maintenance & sous-traitance",
      subtitle: "Réduisez vos délais et reprenez le contrôle",
      short:
        "Fluidifier pour maîtriser\n\nMise en place de systèmes de pilotage adaptés (CONWIP, Kanban) pour structurer vos flux maintenance ou sous-traitance et réduire les encours et les délais.",
      detail: {
        intro:
          "J'analyse vos flux de maintenance et de sous-traitance pour mettre en place des systèmes de pilotage en flux tirés (CONWIP, Kanban) qui réduisent les encours et améliorent la visibilité.",
        text: "Ce que vous obtenez :",
        list: [
          "Réduction des encours et des temps d'attente entre étapes",
          "Amélioration des délais de traitement (maintenance, retours, sous-traitance)",
          "Meilleure visibilité sur l'avancement des flux critiques",
          "Pilotage plus fluide et moins de stress opérationnel",
        ],
        outro:
          "Le pilotage en flux tirés est un levier efficace pour reprendre le contrôle de vos flux complexes.",
      },
    },
  ];

  return (
    <>
      <Navbar />

      {/* ── EN-TÊTE ───────────────────────────────────────────────────────── */}
      <section className="bg-light py-20 px-6 text-center">

        <h1 className="text-primary mb-6">
          Mes solutions Lean Manufacturing
        </h1>

        <p className="max-w-3xl mx-auto text-accent text-lg leading-relaxed">
          Des solutions concrètes pour améliorer durablement votre performance
          industrielle — adaptées à votre contexte, déployées avec vos équipes.
        </p>

      </section>

      {/* ── INTRO SEO ────────────────────────────────────────────────────── */}
      <section className="py-12 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed">
            Chaque entreprise industrielle a ses propres enjeux. C&apos;est pourquoi
            je ne déploie pas de méthode standard : j&apos;analyse votre situation et
            j&apos;active les bons leviers — VSM, diagnostic Lean, TPM, SMED, 5S,
            animation de la performance, optimisation d&apos;implantations, CONWIP.
            Des outils choisis selon votre contexte, pas l&apos;inverse.
          </p>
        </div>
      </section>

      {/* ── GRILLE SOLUTIONS ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {cards.map((card, index) => (
              <div
                key={index}
                className="flip-card h-[420px] cursor-pointer hover:scale-[1.02] transition"
                onClick={() => setActive(active === index ? null : index)}
              >
                <div className={`flip-card-inner h-full ${active === index ? "flipped" : ""}`}>

                  {/* FACE AVANT */}
                  <div
                    className={`
                      flip-face relative p-8 shadow-md flex flex-col justify-between transition-colors duration-500
                      ${index % 2 === 0 ? "bg-light text-primary" : "bg-primary text-white"}
                    `}
                  >
                    <div className="absolute top-1 left-1 text-accent text-2xl font-bold opacity-80">
                      0{index + 1}
                    </div>

                    <div>
                      <h2 className={`mb-3 text-xl ${index % 2 === 0 ? "text-primary" : "text-white"}`}>
                        {card.title}
                      </h2>

                      <p className="text-accent mb-4 text-sm font-medium">
                        {card.subtitle}
                      </p>

                      <p className={`text-sm whitespace-pre-line leading-relaxed ${index % 2 === 0 ? "text-gray-700" : "text-white/80"}`}>
                        {card.short}
                      </p>
                    </div>

                    <span className="text-accent text-sm mt-4">
                      Voir le détail →
                    </span>
                  </div>

                  {/* FACE ARRIÈRE */}
                  <div
                    className={`
                      flip-face flip-back p-8 shadow-md flex flex-col justify-between transition-colors duration-500
                      ${index % 2 === 0 ? "bg-primary text-white" : "bg-light text-primary"}
                    `}
                  >
                    <div>
                      <p className={`mb-4 text-sm leading-relaxed ${index % 2 === 0 ? "text-accent" : "text-gray-700"}`}>
                        {card.detail.intro}
                      </p>

                      {card.detail.text && (
                        <p className={`mb-3 font-medium text-sm ${index % 2 === 0 ? "text-white" : "text-primary"}`}>
                          {card.detail.text}
                        </p>
                      )}

                      <ul className={`space-y-2 text-sm ${index % 2 === 0 ? "text-white/80" : "text-gray-700"}`}>
                        {card.detail.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent mt-0.5">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {card.detail.outro && (
                        <p className={`mt-4 text-sm italic ${index % 2 === 0 ? "text-white/70" : "text-gray-600"}`}>
                          {card.detail.outro}
                        </p>
                      )}
                    </div>

                    <span className={`text-sm mt-4 ${index % 2 === 0 ? "text-white" : "text-accent"}`}>
                      ← Retour
                    </span>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">

          <h2 className="mb-6">
            Votre situation ne rentre pas dans une case ?
          </h2>

          <p className="mb-10 text-light">
            C&apos;est souvent le cas. Chaque contexte industriel est unique.
            Discutons ensemble de vos enjeux et construisons l&apos;approche
            la plus adaptée à votre réalité terrain.
          </p>

          <Link
            href="/contact"
            className="bg-accent px-6 py-3 rounded shadow hover:opacity-90 transition"
          >
            Me contacter
          </Link>

        </div>
      </section>

      <Footer />
    </>
  );
}
