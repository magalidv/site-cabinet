"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ExpertisePage() {
  const [active, setActive] = useState<number | null>(null);

const cards = [
  {
    title: "Analyse de la chaîne de valeur",
    subtitle: "Identifiez rapidement vos pertes et activez des gains concrets",
    short:
      "Comprendre pour mieux agir\nObjectif : obtenir une vision claire de vos flux pour réduire vos délais et améliorer votre productivité.",
    detail: {
      intro:
        "Je réalise une analyse structurée de votre chaîne de valeur (VSM) afin d’identifier rapidement les leviers d’amélioration prioritaires.",
      text: "Résultats :",
      list: [
        "Vision claire des flux et dysfonctionnements",
        "Identification rapide des gaspillages",
        "Plan d’actions concret et priorisé",
        "Réduction des délais et gains de productivité",
      ],
      outro:
        "Objectif : générer des résultats rapides, sans complexité inutile.",
    },
  },

  {
    title: "Diagnostic de maturité Lean",
    subtitle: "Sachez exactement où agir pour progresser efficacement",
    short:
      "Évaluer pour mieux progresser\nObjectif : structurer votre démarche Lean en priorisant les actions à fort impact.",
    detail: {
      intro:
        "Je réalise un diagnostic rapide et structuré de votre organisation pour évaluer votre niveau de maturité Lean.",
      text: "Résultats :",
      list: [
        "Vision claire de votre niveau actuel",
        "Identification des leviers prioritaires",
        "Feuille de route adaptée à votre contexte",
      ],
      outro:
        "Un point de départ clair pour avancer efficacement.",
    },
  },

  {
    title: "Animation de la performance",
    subtitle: "Pilotez votre activité avec clarté et réactivité",
    short:
      "Piloter pour mieux décider\nObjectif : améliorer la réactivité et la prise de décision grâce à un pilotage quotidien efficace.",
    detail: {
      intro:
        "Je mets en place une animation de la performance basée sur des KPI pertinents et des rituels courts.",
      text: "Résultats :",
      list: [
        "Meilleure gestion des priorités",
        "Circulation fluide de l’information",
        "Détection rapide des dérives",
        "Équipes plus réactives et impliquées",
      ],
      outro:
        "Un levier clé pour piloter durablement votre production.",
    },
  },

  {
    title: "Déploiement d’une culture Lean terrain",
    subtitle: "Ancrez des pratiques simples et efficaces dans vos équipes",
    short:
      "Structurer pour durer\nObjectif : améliorer durablement la qualité, la sécurité et la performance grâce à des standards clairs.",
    detail: {
      intro:
        "Je vous accompagne dans le déploiement des fondamentaux Lean directement sur le terrain.",
      text: "Résultats :",
      list: [
        "Amélioration de la qualité et de la sécurité",
        "Stabilisation des processus",
        "Montée en compétence des équipes",
        "Environnement de travail structuré",
      ],
      outro:
        "Des bases solides pour une performance durable.",
    },
  },

  {
    title: "Productivité & montée en cadence",
    subtitle: "Produisez plus, sans subir vos contraintes",
    short:
      "Optimiser pour produire plus\nObjectif : augmenter votre capacité de production tout en maîtrisant vos coûts.",
    detail: {
      intro:
        "J’interviens directement sur vos lignes pour améliorer leur performance (SMED, TPM, analyse des pertes, KPI).",
      text: "Résultats :",
      list: [
        "Augmentation de la productivité",
        "Réduction des arrêts et des pannes",
        "Amélioration du TRS",
        "Meilleure maîtrise des performances",
      ],
      outro:
        "Atteignez vos objectifs de production de manière durable.",
    },
  },

  {
    title: "Optimisation des surfaces et des flux",
    subtitle: "Gagnez en efficacité sans nouveaux investissements",
    short:
      "Optimiser sans investir\nObjectif : fluidifier vos flux et augmenter votre capacité avec les ressources existantes.",
    detail: {
      intro:
        "Je vous accompagne dans la réorganisation de vos espaces et l’optimisation de vos flux industriels.",
      text: "Résultats :",
      list: [
        "Réduction des déplacements inutiles",
        "Amélioration de l’ergonomie et de la sécurité",
        "Augmentation de la capacité de production",
      ],
      outro:
        "Plus de performance sans investissement lourd.",
    },
  },

  {
    title: "Gestion de projets industriels",
    subtitle: "Sécurisez vos projets et gagnez en efficacité",
    short:
      "Structurer pour réussir\nObjectif : garantir la réussite de vos projets en maîtrisant délais, coûts et risques.",
    detail: {
      intro:
        "Je vous accompagne dans le pilotage complet de vos projets industriels.",
      text: "Résultats :",
      list: [
        "Maîtrise des délais et des coûts",
        "Réduction des risques",
        "Coordination efficace des équipes",
        "Projets menés à terme avec impact",
      ],
      outro:
        "Avancez sereinement sur vos projets stratégiques.",
    },
  },

  {
    title: "Flux maintenance & sous-traitance",
    subtitle: "Réduisez vos délais et reprenez le contrôle",
    short:
      "Fluidifier pour maîtriser\nObjectif : améliorer la visibilité et réduire les encours sur vos flux critiques.",
    detail: {
      intro:
        "Je mets en place des systèmes de pilotage adaptés (type CONWIP) pour structurer vos flux.",
      text: "Résultats :",
      list: [
        "Réduction des encours",
        "Amélioration des délais",
        "Meilleure visibilité des flux",
        "Pilotage plus fluide",
      ],
      outro:
        "Reprenez le contrôle de vos flux critiques.",
    },
  },
];

  return (
    <>
      <Navbar />

      {/* EN-TETE */}
      <section className="bg-light py-20 px-6 text-center">
        <h1 className="text-primary mb-6">
          Nos solutions
        </h1>
        <h3 className="max-w-5xl mx-auto text-accent">
         Des solutions concrètes pour améliorer durablement votre performance industrielle.
        </h3>
      </section>

      {/* GRID EXPERTISE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {cards.map((card, index) => (
              <div
                key={index}
                className="flip-card h-[400px] cursor-pointer hover:scale-[1.02] transition"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                <div
                  className={`flip-card-inner h-full ${
                    active === index ? "flipped" : ""
                  }`}
                >

                {/* FACE AVANT */}
                <div
                  className={`
                    flip-face relative p-8 shadow-md flex flex-col justify-between transition-colors duration-500
                    ${
                      index % 2 === 0
                        ? "bg-light text-primary"
                        : "bg-primary text-white"
                    }
                  `}
                >
                  {/* NUMERO */}
                  <div className="absolute top-1 left-1 text-accent text-2xl font-bold opacity-80">
                    0{index + 1}
                  </div>

                  <div>
                    <h3
                      className={`mb-3 ${
                        index % 2 === 0 ? "text-primary" : "text-white"
                      }`}
                    >
                      {card.title}
                    </h3>

                    <h4 className="text-accent mb-4">
                      {card.subtitle}
                    </h4>

                    <p
                      className={`text-sm whitespace-pre-line ${
                        index % 2 === 0 ? "text-gray-700" : "text-white/80"
                      }`}
                    >
                      {card.short}
                    </p>
                  </div>

                  <span className="text-accent text-sm mt-4">
                    Voir plus →
                  </span>
                </div>

                {/* FACE ARRIÈRE */}
                <div
                  className={`
                    flip-face flip-back p-8 shadow-md flex flex-col justify-between transition-colors duration-500
                    ${
                      index % 2 === 0
                        ? "bg-primary text-white"
                        : "bg-light text-primary"
                    }
                  `}
                >
                  <div>
                    <p
                      className={`mb-4 ${
                        index % 2 === 0 ? "text-accent" : "text-gray-700"
                      }`}
                    >
                      {card.detail.intro}
                    </p>

                    {card.detail.text && (
                      <p
                        className={`mb-4 ${
                          index % 2 === 0 ? "text-white/80" : "text-gray-600"
                        }`}
                      >
                        {card.detail.text}
                      </p>
                    )}

                    <ul
                      className={`space-y-2 text-sm ${
                        index % 2 === 0 ? "text-white/80" : "text-gray-700"
                      }`}
                    >
                      {card.detail.list.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>

                    {card.detail.outro && (
                      <p
                        className={`mt-4 text-sm ${
                          index % 2 === 0 ? "text-white/80" : "text-gray-700"
                        }`}
                      >
                        {card.detail.outro}
                      </p>
                    )}
                  </div>

                  <span
                    className={`text-sm mt-4 ${
                      index % 2 === 0 ? "text-white" : "text-accent"
                    }`}
                  >
                    ← Retour
                  </span>
                </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="mb-6">
            Besoin d’un accompagnement adapté ?
          </h2>

          <p className="mb-8 text-light">
            Chaque situation est unique. Discutons ensemble de vos enjeux et identifions les leviers d’amélioration.
          </p>

          <a
            href="/contact"
            className="bg-accent px-6 py-3 rounded shadow hover:opacity-90 transition"
          >
            Me contacter
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}