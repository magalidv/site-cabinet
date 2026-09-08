import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Le cabinet – Consultant Lean Management indépendant en Savoie",
  description:
    "10 ans d'expérience industrielle terrain : ingénieur production, supply chain, directeur amélioration continue. RD Conseil Lean accompagne les PME et ETI en Lean Manufacturing, en Auvergne-Rhône-Alpes.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ── EN-TÊTE ───────────────────────────────────────────────────────── */}
      <section className="bg-light py-20 px-6 text-center">

        <h1 className="text-primary mb-6">
          Un expert terrain au service de la performance industrielle
        </h1>

        <p className="max-w-3xl mx-auto text-accent text-lg leading-relaxed">
          {/* ⚠️ CONSEIL : remplacez "Romain Dessaigne" par votre prénom et nom réels.
              Nommer l'expert est un signal fort pour Google (principe E-E-A-T)
              et un facteur de confiance décisif pour vos prospects. */}
          10 années d&apos;expérience au cœur des opérations industrielles —
          de l&apos;atelier à la direction de l&apos;amélioration continue —
          pour accompagner concrètement la performance des entreprises.
        </p>

      </section>

      {/* ── PARCOURS ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-primary mb-6">
              Un parcours construit au cœur des opérations industrielles
            </h2>

            <p className="mb-6 text-gray-700">
              Avant de créer RD Conseil Lean, j&apos;ai exercé pendant 10 ans des
              fonctions opérationnelles dans des environnements industriels variés.
              Ce parcours terrain est le fondement de chaque mission que je mène
              aujourd&apos;hui.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold mt-0.5">→</span>
                <span>
                  <strong className="text-primary">Ingénieur supply chain</strong> —
                  gestion et optimisation des flux,
                  pilotage des stocks et des délais, planification des ressources de production.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold mt-0.5">→</span>
                <span>
                  <strong className="text-primary">Ingénieur de production</strong> —
                  organisation des lignes, amélioration du TRS,
                  résolution de problèmes terrain.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold mt-0.5">→</span>
                <span>
                  <strong className="text-primary">Responsable multi-sites de laboratoires</strong> —
                  pilotage d&apos;équipes, standardisation des pratiques,
                  déploiement d&apos;indicateurs de performance, gestion du plan de développement des espaces et de l'activité.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold mt-0.5">→</span>
                <span>
                  <strong className="text-primary">Directeur amélioration continue</strong> —
                  déploiement de la démarche Lean à l&apos;échelle d&apos;un site industriel,
                  conduite du changement, formation des équipes, optimisation des processus.
                </span>
              </li>
            </ul>

            <div className="mt-8 border-l-4 border-accent pl-4">
              <p className="text-gray-700 italic">
                Ce parcours me donne une vision globale et transversale des enjeux
                industriels : production, flux, organisation, performance et management
                d&apos;équipes. Je connais vos contraintes de l&apos;intérieur.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/presentation/pexels-eau.jpg"
              alt="Consultant Lean en analyse terrain dans un environnement industriel"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ── RÉALITÉ TERRAIN ──────────────────────────────────────────────── */}
      <section className="section-divider bg-light py-20 px-6">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="/presentation/pexels-hommeface.jpg"
              alt="Accompagnement terrain d'une équipe industrielle en amélioration continue"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-primary mb-6">
              Une expérience directement applicable à vos enjeux
            </h2>

            <p className="mb-6 text-gray-700">
              J&apos;ai vécu de l&apos;intérieur les problématiques que j&apos;accompagne
              aujourd&apos;hui : la pression des délais, les pannes récurrentes,
              les réorganisations qui s&apos;étirent, les gains de productivité
              difficiles à pérenniser. Cette réalité terrain conditionne
              ma façon d&apos;intervenir.
            </p>

            <div className="border-l-4 border-accent pl-4 mb-6">
              <p className="text-primary font-medium mb-4">
                J&apos;interviens sur vos enjeux concrets :
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-semibold mt-0.5">→</span>
                  <span>Structurer l&apos;organisation et les flux de production</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-semibold mt-0.5">→</span>
                  <span>Améliorer la productivité et le TRS de vos lignes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-semibold mt-0.5">→</span>
                  <span>Réduire les délais et les stocks intermédiaires</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-semibold mt-0.5">→</span>
                  <span>Résoudre rapidement les problématiques terrain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-semibold mt-0.5">→</span>
                  <span>Ancrer une culture d&apos;amélioration continue durable</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700">
              J&apos;interviens auprès de PME et ETI industrielles en Savoie,
              en Auvergne-Rhône-Alpes.
            </p>
          </div>

        </div>
      </section>

      {/* ── APPROCHE ─────────────────────────────────────────────────────── */}
      <section className="section-divider py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-primary mb-6">
              Une approche pragmatique, orientée résultats
            </h2>

            <p className="mb-6 text-gray-700 italic">
              Ma conviction est simple : dans l&apos;industrie, les solutions les
              plus efficaces sont souvent les plus directes.
            </p>

            <p className="mb-4 text-gray-700">
              Chaque mission commence par une immersion terrain. Je prends le temps
              de comprendre votre contexte avant de proposer quoi que ce soit.
              Pas de méthode standard appliquée mécaniquement — une analyse
              précise de votre situation, puis un plan d&apos;action calibré
              à vos ressources et vos contraintes.
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold mt-0.5">→</span>
                <span>
                  <strong className="text-primary">Immersion terrain</strong> —
                  observation des flux, échanges avec vos équipes,
                  compréhension des contraintes réelles.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold mt-0.5">→</span>
                <span>
                  <strong className="text-primary">Actions concrètes</strong> —
                  plan d&apos;action priorisé, déploiement avec vos équipes,
                  résultats mesurables dès les premières semaines.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-semibold mt-0.5">→</span>
                <span>
                  <strong className="text-primary">Autonomie durable</strong> —
                  transfert de compétences, formation terrain,
                  pour que vos équipes continuent à progresser après la mission.
                </span>
              </li>
            </ul>

            <div className="border-l-4 border-accent pl-4">
              <p className="text-primary font-medium">
                Objectif : générer des résultats visibles rapidement,
                sans complexifier votre organisation ni créer de dépendance.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/presentation/pexels-ingenieur.jpg"
              alt="Analyse et amélioration des processus industriels avec les équipes terrain"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ── CONCLUSION / CTA ─────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="mb-6">
            Parlons de votre projet
          </h2>

          <p className="mb-4 text-light">
            Chaque mission est unique. Je m&apos;adapte à votre contexte,
            à vos ressources et à votre rythme pour vous accompagner
            efficacement vers vos objectifs de performance. Ma priorité : créer de la valeur durable pour votre activité.
          </p>

          <p className="mb-10 text-light">
            Premier échange sans engagement — réponse sous 48h ouvrées.
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
