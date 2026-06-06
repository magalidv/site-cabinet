"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function RealisationsPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-light py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-primary mb-6">
            Nos réalisations
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            Des résultats concrets obtenus sur le terrain grâce à une approche
            pragmatique, structurée et orientée performance durable.
          </p>
        </div>
      </section>

      {/* WRAP */}
      {/* REALISATIONS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">

          {[
            {
              id: "01",
              sector: "Performance industrielle — Industrie du carton",
              title: "Performance d’une ligne de production",
              objectif:"Améliorer la productivité et fiabiliser une ligne de production d’emballages.",
              context:
                "Nouvelle ligne de production d’emballage carton, mise en service depuis 6 mois, ne répondant pas aux objectifs de disponibilité et de productivité attendus.",
              badge: "+40%",
              badgeLabel: "de productivité obtenue",
              metric1: {
                title: "Productivité horaire",
                rows: [
                  ["Moyenne initiale", "2 500 boîtes/h"],
                  ["Situation stabilisée", "3 500 boîtes/h"],
                  ["Gain obtenu", "+1 000 (+40%)"],
                ],
              },
              metric2: {
                title: "Fiabilité machine",
                rows: [
                  ["Taux de panne initial", "15%"],
                  ["Taux stabilisé", "5%"],
                  ["Amélioration", "10 pts"],
                ],
              },
              actions: [
                "Déploiement d’une démarche TPM",
                "Standards de formation et de nettoyage",
                "Formalisation des bonnes pratiques opérationnelles",
                "Check-lists de sécurité",
              ],
              insight:
                "Les gains ont principalement été obtenus grâce à la structuration des standards terrain et à l’amélioration de la maintenance autonome. Mesures initiales et résultats calculés sur 3 mois",
              duration: "4 mois",
              approach: "TPM • Lean • Standards terrain",
            },

            {
              id: "02",
              sector: "Optimisation industrielle — Pôle multi-laboratoires",
              title: "Optimisation d’un pôle multi-laboratoires",
              objectif:"Optimiser l’utilisation des surfaces et améliorer l’efficience globale, tout en remettant les espaces en conformité avec les normes d’aménagement en vigueur.",
              context:
                "Pôle de développement composé de 17 laboratoires électroniques au sein d’un site industriel. Necessite une réduction des coûts immobiliers (location des surfaces) tout en maintenant le niveau de productivité existant.",
              badge: "+20%",
              badgeLabel: "de surface disponibles",
              metric1: {
                title: "Optimisation des surfaces",
                rows: [
                  ["Surface initiale", "2 500 m²"],
                  ["Surface finale", "2 000 m²"],
                  ["Gain obtenu", "500 m² (20%)"],
                ],
              },
              metric2: {
                title: "Capacité",
                rows: [
                  ["Capacité initiale", "150 postes"],
                  ["Capacité finale", "162 postes"],
                  ["Gain obtenu", "12 postes (8%)"],
                ],
              },
              actions: [
                "Matrice de maturité des espaces pour prioriser les investissements",
                "Plan d’actions ISO 14001 & ISO 45001",
                "Remise à niveau des installations électriques",
                "Réorganisation des espaces et mise en conformité selon les normes",
              ],
              insight:
                "Le regroupement des laboratoires par métiers en mutualisant les ressources a permis une réduction de trois laboratoirs (et donc les coûts immobiliers) tout en augmentant la capacité opérationnelle.",
              duration: "9 mois",
              approach: "Lean Layout • QHSE • Optimisation surfaces",
            },

            {
              id: "03",
              sector: "Capacité industrielle — Optimisation d’espace",
              title: "Augmentation de capacité d’une ligne de développement",
              objectif:"Augmenter la capacité de production d’un espace existant en optimisant l’organisation et en adaptant les installations techniques (réseaux et besoins électriques).",
              context:
                "Croissance continue de l’activité sur un pôle de production avec une perspective de stabilisation. Espace de production arrivé à saturation, nécessitant une augmentation de capacité sans extension de surface disponible.",
              badge: "+13%",
              badgeLabel: "de capacité obtenue",
              metric1: {
                title: "Capacité de production",
                rows: [
                  ["Situation initiale", "78 postes"],
                  ["Situation finale", "88 postes"],
                  ["Gain obtenu", "+10 postes (+13%)"],
                ],
              },
              metric2: {
                title: "Nombre de projets en cours",
                rows: [
                  ["Avant projet", "13"],
                  ["Après projet", "17"],
                  ["Évolution", "Passage à une moyenne de 6 à 5 postes par projet"],
                ],
              },
              actions: [
                "Mutualisation des moyens pour augmenter le nombre de projets",
                "Mise en place de stockages bord de ligne et d’un management visuel",
                "Mise à niveau des réseaux et installations électriques",
                "Réorganisation des espaces",
                "Amélioration des standards visuels et opérationnels",
              ],
              insight:
                "L’augmentation de capacité a été réalisée sans extension de surface grâce à une optimisation des implantations et des standards terrain.",
              duration: "3 mois",
              approach: "Lean Manufacturing • Flux • Implantation",
            },
            {
              id: "04",
              sector: "Performance industrielle — Logistique & Supply Chain",
              title: "Externalisation logistique (3PL)",
              objectif:"Recentrer les équipes sur les activités à forte valeur ajoutée et améliorer l’efficience des flux.",
              context:
                "Des activités logistiques à faible valeur ajoutée mobilisaient du temps et de l’espace au détriment de la production.",
              badge: "-83%",
              badgeLabel: "de temps d’opérations logistiques",
              metric1: {
                title: "Temps opérationnel (emballage / déballage)",
                rows: [
                  ["Situation initial", "6 h / semaine"],
                  ["Situation après projet", "1 h / semaine"],
                  ["Gain obtenu", "5 h (83%)"],
                ],
              },
              metric2: {
                title: "Gestion des emballages",
                rows: [
                  ["Temps stockage initial", "1 h / semaine"],
                  ["Situation après projet", "0 h / semaine"],
                  ["Amélioration", "1 h (100%)"],
                ],
              },
              metric3: {
                title: "Surface utilisée",
                rows: [
                  ["Surface initiale", "10 m²"],
                  ["Surface optimisée", "2 m²"],
                  ["Gain obtenu", "-8 m² (-80%)"],
                ],
              },
              actions: [
                "Externalisation des opérations vers un prestataire 3PL",
                "Mise en place de standards et procédures logistique",
                "Formation et accompagnement du prestataire",
                "Libération d’espace pour augmenter la surface de production",
              ],
              insight:
                "Le levier principal a été la suppression des tâches à faible valeur ajoutée en les externalisant, permettant un recentrage immédiat des équipes sur la production.s",
              duration: "5 mois",
              approach: "Lean • Supply Chain • Externalisation 3PL",
            },

          ].map((item, index) => (

            <div key={index}>

              {/* STAG */}
              <div className="text-accent uppercase tracking-[0.2em] text-sm mb-6">
                Réalisation {item.id}
              </div>

              {/* CARD */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

                {/* HEADER */}
                <div className="grid lg:grid-cols-[1fr_220px] gap-10 p-10 md:p-14 border-b border-gray-100 items-start">

                  <div>
                    <div className="text-accent font-medium mb-4">
                      {item.sector}
                    </div>

                    <h2 className="text-primary text-4xl leading-tight mb-6">
                      {item.title}
                    </h2>
                    <div className="text-accent font-medium mb-3">
                      Objectif : 
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      {item.objectif}
                    </p>
                    <br/>

                    <div className="text-accent font-medium mb-3">
                      Contexte :
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      {item.context}
                    </p>
                  </div>

                  {/* BADGE */}
                  <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-center items-center text-center self-start sticky top-10">

                    <div className="text-5xl font-bold mb-3">
                      {item.badge}
                    </div>

                    <div className="text-white/80 leading-relaxed">
                      {item.badgeLabel}
                    </div>

                  </div>

                </div>

                {/* METRICS */}
                <div className="grid lg:grid-cols-3 gap-8 p-10 md:p-14 bg-light">

                  {/* BLOC 1 */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm">

                    <h3 className="text-primary mb-6">
                      {item.metric1.title}
                    </h3>

                    <div className="space-y-5">

                      {item.metric1.rows.map((row, i) => (
                        <div
                          key={i}
                          className={`flex justify-between gap-6 ${
                            i === item.metric1.rows.length - 1
                              ? "border-t pt-5"
                              : ""
                          }`}
                        >
                          <span className="text-gray-600">
                            {row[0]}
                          </span>

                          <span className="font-semibold text-primary">
                            {row[1]}
                          </span>
                        </div>
                      ))}

                    </div>
                  </div>

                  {/* BLOC 2 */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm">

                    <h3 className="text-primary mb-6">
                      {item.metric2.title}
                    </h3>

                    <div className="space-y-5">

                      {item.metric2.rows.map((row, i) => (
                        <div
                          key={i}
                          className={`flex justify-between gap-6 ${
                            i === item.metric2.rows.length - 1
                              ? "border-t pt-5"
                              : ""
                          }`}
                        >
                          <span className="text-gray-600">
                            {row[0]}
                          </span>

                          <span className="font-semibold text-primary">
                            {row[1]}
                          </span>
                        </div>
                      ))}

                    </div>
                  </div>

                  {/* BLOC 3 */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm">

                    <h3 className="text-primary mb-6">
                      Actions mises en place
                    </h3>

                    <ul className="space-y-4 text-gray-700">
                      {item.actions.map((action, i) => (
                        <li key={i}>
                          • {action}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>

                {/* INSIGHT */}
                <div className="flex gap-6 items-start p-10 md:p-14 border-t border-gray-100">

                  <div className="text-5xl">
                    <span className="faq-arrow">+</span>
                  </div>

                  <div>
                    <h3 className="text-primary mb-3">
                      Point clé du projet
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      {item.insight}
                    </p>
                  </div>

                </div>

                {/* FOOTER */}
                <div className="bg-primary text-white px-10 md:px-14 py-8 flex flex-col md:flex-row justify-between gap-4">

                  <div>
                    <span className="text-white/70">
                      Durée du projet
                    </span>

                    <div className="text-2xl mt-1">
                      {item.duration}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-white/70">
                      Approche
                    </span>

                    <div className="text-2xl mt-1">
                      {item.approach}
                    </div>
                  </div>

                </div>

              </div>

            </div>

          ))}
    {/* REALISATION 05 */}
      <div>

        {/* STAG */}
        <div className="text-accent uppercase tracking-[0.2em] text-sm mb-6">
          Réalisation 05
        </div>

        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

          {/* HEADER */}
          <div className="grid lg:grid-cols-[1fr_220px] gap-10 p-10 md:p-14 border-b border-gray-100 items-start">

            <div>
              <div className="text-accent font-medium mb-4">
                Mise en place d’une animation de la performance dans une usine de production
              </div>

              <h2 className="text-primary text-4xl leading-tight mb-6">
                Mise en place d’une animation de la performance
              </h2>
              <div className="text-accent font-medium mb-3">
                  Objectif : 
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                 Structurer le pilotage de la performance du terrain à la direction.
              </p>
              <br/>
              <div className="text-accent font-medium mb-3">
                  Contexte :
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                L’animation de la performance reposait sur une unique réunion globale, entraînant :
                <br />
                <ul className="space-y-4 text-gray-700">

                  <li>
                    • un manque réactivité face aux problèmes
                  </li>

                  <li>
                    • une circulation d’information limitée
                  </li>

                  <li>
                    • une absence d’indicateurs de suivi fiables
                  </li>

                  <li>
                    • une difficulté à identifier et traiter les points durs
                  </li>
                </ul>
                </p>

            </div>

            {/* BADGE */}
            <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-center items-center text-center self-start sticky top-10">
              <div className="text-white/90 font-bold leading-relaxed">
                Performance  plus réactive<br/> et mieux pillotée <br/>
              </div>
            </div>

          </div>

          {/* METRICS */}
          <div className="grid lg:grid-cols-3 gap-8 p-10 md:p-14 bg-light">

            {/* BLOC 1 = IMAGE */}
            <div className="bg-white rounded-2xl p-4 shadow-sm lg:col-span-2">

              <div className="relative w-full h-full min-h-[320px] rounded-xl overflow-hidden border border-gray-100">

                <Image
                  src="/realisations/schema.jpeg"
                  alt="Schéma animation de la performance"
                  fill
                  className="object-contain bg-white"
                />

              </div>

            </div>

            {/* BLOC 2 */}
            <div className="bg-white lg:col-span-1 rounded-2xl p-8 shadow-sm">

              <h3 className="text-primary mb-6">
                Actions mises en place
              </h3>

              <ul className="space-y-4 text-gray-700">

                <li>
                  • Mise en place de rituels quotidiens multi-niveaux
                </li>

                <li>
                  • Déploiement de KPI visuels adaptés à chaque niveau
                </li>

                <li>
                  • Structuration d’un processus de résolution de problèmes
                </li>

                <li>
                  • Analyse systématique des dysfonctionnements
                </li>

              </ul>

            </div>

          </div>

          {/* INSIGHT */}
          <div className="flex gap-6 items-start p-10 md:p-14 border-t border-gray-100">

            <div className="text-5xl">
              <span className="faq-arrow">+</span>
            </div>

            <div>
              <h3 className="text-primary mb-3">
                Point clé du projet
              </h3>

              <p className="text-gray-700 leading-relaxed">
                La mise en place d’un pilotage multi-niveaux a permis de fluidifier
                la circulation des informations entre le terrain et la direction,
                tout en accélérant considérablement le traitement des problèmes.
              </p>
            </div>

          </div>

          {/* FOOTER */}
          <div className="bg-primary text-white px-10 md:px-14 py-8 flex flex-col md:flex-row justify-between gap-4">

            <div>
              <span className="text-white/70">
                Durée du projet
              </span>

              <div className="text-2xl mt-1">
                3 mois
              </div>
            </div>

            <div className="text-right">
              <span className="text-white/70">
                Approche
              </span>

              <div className="text-2xl mt-1">
                KPI • Pilotage • Lean management
              </div>
            </div>

          </div>

        </div>

      </div>

        </div>
        
      </section>



      {/* CTA */}
      <section className="bg-primary py-24 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="mb-6">
            Vous souhaitez obtenir les mêmes résultats ?
          </h2>

          <p className="text-light mb-10 leading-relaxed">
            Chaque environnement industriel est unique. Échangeons ensemble
            pour identifier les leviers d’amélioration adaptés à votre activité.
          </p>

          <a
            href="/contact"
            className="inline-block bg-accent px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Demander un échange
          </a>

        </div>
      </section>

      <Footer />
    </>
  );
}