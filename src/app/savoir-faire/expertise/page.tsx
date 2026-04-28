"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ExpertisePage() {
  const [active, setActive] = useState<number | null>(null);

  const cards = [
    {
      title: "Analyse de la chaîne de valeur",
      subtitle:
        "Identifiez rapidement vos pertes et activez des gains concrets",
      short:
        "Objectif : générer des résultats visibles rapidement, sans complexité inutile.",
      detail: {
        intro:
          "Inutile d’attendre des mois pour améliorer votre performance.",
        text:
          "Je vous aide à cibler rapidement les leviers à fort impact grâce à une analyse simplifiée et efficace de votre chaîne de valeur.",
        list: [
          "Vision claire de vos flux et dysfonctionnements",
          "Identification rapide des gaspillages",
          "Plan d’actions priorisé et atteignable",
        ],
      },
    },
    {
      title: "Diagnostic de maturité Lean",
      subtitle:
        "Sachez exactement où agir pour progresser efficacement",
      short:
        "Vous souhaitez déployer le Lean mais ne savez pas par où commencer ? Je réalise un diagnostic structuré.",
      detail: {
        intro: "Un diagnostic rapide et structuré pour faire le point sur votre organisation.",
        text: "Nous identifions ensemble :",
        list: [
          "Vos points forts",
          "Vos axes d’amélioration",
          "Vos priorités d’action",
        ],
        outro:
          "Ce diagnostic permet de poser les bases d’un déploiement Lean cohérent et adapté à votre contexte.",
      },
    },
        {
      title: "Déploiement d’une animation de la performance",
      subtitle:
        "Pilotez votre activité au quotidien avec efficacité",
      short:
        "Sans pilotage structuré, la performance ne dure pas. Je mets en place avec vos équipes une animation simple et efficace basée sur des rituels courts et dynamiques",
      detail: {
        intro:
          "Mettre en place une animation de la performance efficace, c’est structurer le pilotage de votre activité au quotidien.",
        text:
          "Grâce à des indicateurs pertinents et des rituels courts, vous obtiendrez :",
        list: [
          "Meilleure gestion des priorités",
          "Circulation fluide de l’information",
          "Visibilité immédiate sur les problèmes",
          "Réactivité accrue dans la résolution",
        ],
      },
    },
    {
      title: "Déploiement d’une culture Lean terrain",
      subtitle:
        "Ancrez les bons réflexes au cœur de vos opérations",
      short:
        "Le Lean ne doit pas rester théorique. Il doit vivre sur le terrain. Je vous accompagne pour déployer des outils simples et concrets.",
        //"L’objectif : installer des fondamentaux solides, directement au cœur de vos opérations.",
      detail: {
        intro: "Mise en place d’outils simples et efficaces :",
        text: "",
        list: [
          "5S",
          "Management visuel",
          "Tournées terrain",
          "Matrices de polyvalence",
          "Standards de travail et bonnes pratiques",
          "Check-lists de prise de poste",
        ],
        outro:
          "Une approche concrète, orientée terrain et résultats.",
      },
    },
        {
      title: "Amélioration de la productivité / montée en cadence",
      subtitle:
        "Produisez plus, mieux, et sans subir vos contraintes",
      short:
        "Objectif : générer des résultats visibles rapidement, sans complexité inutile.",
      detail: {
        intro:
          "Analyse simplifiée et efficace de votre chaîne de valeur.",
        text:
          "",
        list: [
          "Mise en place d’indicateurs de performance (productivité horraire, taux d’arrêt, taux de panne, ...)",
          "Analyse des pertes (Pareto) et résolution de problèmes",
          "Réduction des temps de changement (SMED)",
          "Déploiement de la maintenance productive (TPM)",
          "Formalisation des standards et bonnes pratiques",
        ],
      },
    },
    {
      title: "Optimisation des surfaces et des implantations",
      subtitle:
        "Gagnez en efficacité sans investir immédiatement dans de nouveaux moyens",
      short:
        "Avant d’investir, optimisez ce que vous avez déjà.",
      detail: {
        intro: "Réorganisation de vos espaces pour soutenir votre performance industrielle.",
        text: "Dans le cadre :",
        list: [
          "D’une réimplantation d’atelier",
          "D’une optimisation de surface existante",
          "D’un projet d’extension ou de déménagement",
        ],
        outro:
          "Plus de performance avec les mêmes ressources.",
      },
    },        
    {
      title: "Gestion de projets industriels",
      subtitle:
        "Sécurisez vos projets stratégiques de bout en bout",
      short:
        "Les projets industriels sont souvent complexes et risqués. Je vous accompagne pour structurer leur pilotage et sécuriser leur réussite.",
      detail: {
        intro:
          "Accompagnement sur vos projets structurants, de la conception à la mise en œuvre.",
        text:
          "",
        list: [
          "Pilotage et suivi de projet",
          "Analyse des risques",
          "Coordination des acteurs",
          "Mise en place opérationnelle",
          "Structurer une matrice de maturité multi-zones",
          "Prioriser les projets et investissements (QHSE)",
        ],
      },
    },
    {
      title: "Optimisation des flux de maintenance et de sous-traitance",
      subtitle:
        "Fluidifiez vos flux et réduisez vos délais",
      short:
        "Des flux mal maîtrisés génèrent des retards, du stress et des coûts. Je mets en place des solutions de pilotage adaptées (type CONWIP) pour fluidifier vos opérations.",
      detail: {
        intro: "Mise en place de systèmes de pilotage adaptés, notamment de type CONWIP, pour :",
        text: "",
        list: [
          "Fluidifier les flux",
          "Réduire les encours",
          "Améliorer les délais",
          "Gagner en visibilité"
        ],
        outro:
          "Retrouvez du contrôle sur vos flux critiques.",
      },
    },
  ];

  return (
    <>
      <Navbar />

      {/* EN-TETE */}
      <section className="bg-light py-20 px-6 text-center">
        <h1 className="text-primary mb-6">
          Notre expertise
        </h1>

        <p className="max-w-2xl mx-auto text-gray-700">
          Des solutions concrètes pour améliorer durablement votre performance industrielle.
        </p>
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
                  <div className="flip-face relative bg-light p-8 shadow-md flex flex-col justify-between">
                      {/* NUMERO */}
                    <div className="absolute top-1 left-1 text-accent text-2xl font-bold opacity-80">
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="text-primary mb-3">
                        {card.title}
                      </h3>

                      <h4 className="text-accent mb-4">
                        {card.subtitle}
                      </h4>

                      <p className="text-gray-700 text-sm">
                        {card.short}
                      </p>
                    </div>

                    <span className="text-accent text-sm mt-4">
                      Voir plus →
                    </span>
                  </div>

                  {/* FACE ARRIÈRE */}
                  <div className="flip-face flip-back bg-primary text-white p-8 shadow-md flex flex-col justify-between">

                    <div>
                      <p className="mb-4 text-accent">
                        {card.detail.intro}
                      </p>

                      {card.detail.text && (
                        <p className="mb-4 text-white/80">
                          {card.detail.text}
                        </p>
                      )}

                      <ul className="space-y-2 text-white/80 text-sm">
                        {card.detail.list.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>

                      {card.detail.outro && (
                        <p className="mt-4 text-white/80 text-sm">
                          {card.detail.outro}
                        </p>
                      )}
                    </div>

                    <span className="text-sm mt-4">
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