import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ma vision – Lean Management & amélioration continue durable",
  description:
    "Ma conviction : le Lean n'est pas une boîte à outils, c'est une culture. Découvrez la philosophie et les valeurs qui guident chaque mission de conseil en Lean Management de RD Conseil Lean.",
};

export default function VisionPage() {
  return (
    <>
      <Navbar />

      {/* ── EN-TÊTE ───────────────────────────────────────────────────────── */}
      <section className="bg-light py-20 px-6 text-center">

        <h1 className="text-primary mb-6">
          Ma vision du Lean Management
        </h1>

        <p className="max-w-3xl mx-auto text-accent text-lg leading-relaxed">
          Le Lean n&apos;est pas une méthode qu&apos;on applique. C&apos;est une culture
          qu&apos;on construit — avec les équipes, sur le terrain, dans la durée.
        </p>

      </section>

      {/* ── BLOC A : LE LEAN, TEL QUE JE LE CONÇOIS ─────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="order-1">
            <h2 className="text-primary mb-6">
              Le Lean, ce n&apos;est pas une boîte à outils
            </h2>

            <p className="text-gray-700 mb-6">
              Beaucoup d&apos;entreprises ont tenté le Lean et en sont revenues déçues.
              Pas parce que la méthode ne fonctionne pas — mais parce qu&apos;elle a été
              appliquée comme un catalogue d&apos;outils, sans ancrage dans la réalité du terrain.
            </p>

            <p className="text-gray-700 mb-6">
              Ma conviction : <strong className="text-accent">un outil Lean sans changement
              de pratiques ne génère pas de résultats durables.</strong> Le 5S qui tient
              six mois puis disparaît, le tableau de bord que personne ne regarde,
              le chantier Kaizen dont les actions ne sont jamais clôturées — ces
              échecs ont une cause commune : l&apos;outil a été déployé sans que
              les équipes ne comprennent le sens de la démarche.
            </p>

            <div className="border-l-4 border-accent pl-4">
              <p className="text-gray-700 italic">
                C&apos;est pourquoi chacune de mes missions commence par une question
                simple : qu&apos;est-ce qui va réellement changer dans la façon de
                travailler ? Les outils viennent ensuite, au service de cette réponse.
              </p>
            </div>
          </div>

          <div className="order-2">
            <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/presentation/image-conseil.jpg"
                alt="Vision du Lean Management — approche terrain et amélioration continue durable"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── BLOC B : MES VALEURS ─────────────────────────────────────────── */}
      <section className="section-divider py-24 px-6 bg-light">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-1">
            <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/presentation/image-suivi.jpg"
                alt="Accompagnement et suivi des équipes dans une démarche Lean pérenne"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-primary mb-6">
              Ce qui guide chaque mission
            </h2>

            <p className="text-gray-700 mb-8">
              Trois principes orientent ma façon de travailler,
              quelle que soit la mission :
            </p>

            <div className="space-y-6">

              <div className="border-l-4 border-accent pl-4">
                <p className="text-primary font-medium mb-1">La simplicité avant tout</p>
                <p className="text-gray-700">
                  Dans l&apos;industrie, les solutions complexes sont rarement les meilleures.
                  Je cherche systématiquement la solution la plus simple qui résout
                  vraiment le problème — celle que vos équipes peuvent s&apos;approprier
                  et faire vivre après ma mission.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <p className="text-primary font-medium mb-1">Le terrain avant les slides</p>
                <p className="text-gray-700">
                  Je ne travaille pas depuis un bureau avec vos données. Je vais
                  observer, écouter, comprendre. Les diagnostics se font sur le
                  gemba — là où la valeur est créée. C&apos;est là que se trouvent
                  aussi les vraies solutions.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <p className="text-primary font-medium mb-1">L&apos;autonomie comme objectif final</p>
                <p className="text-gray-700">
                  Mon objectif n&apos;est pas de créer une dépendance. À la fin d&apos;une mission,
                  vos équipes doivent être capables de continuer à progresser seules.
                  Le transfert de compétences fait partie intégrante de chaque intervention.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── BLOC C : CE QUE JE REFUSE ────────────────────────────────────── */}
      <section className="section-divider py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="order-1">
            <h2 className="text-primary mb-6">
              Une performance industrielle construite pour durer
            </h2>

            <p className="text-gray-700 mb-6">
              Il est facile de produire des résultats spectaculaires à court terme —
              en mobilisant toute l&apos;organisation autour d&apos;un objectif ponctuel.
              Mais si les pratiques reviennent à leur état initial trois mois
              après la mission, qu&apos;a-t-on vraiment accompli ?
            </p>

            <p className="text-gray-700 mb-6">
              Je préfère des résultats solides et durables à des chiffres
              impressionnants qui ne tiennent pas. Cela implique de travailler
              sur les causes profondes, pas uniquement sur les symptômes.
              Cela implique aussi d&apos;embarquer vos équipes dans la démarche,
              pas de la leur imposer.
            </p>

            <div className="border-l-4 border-accent pl-4">
              <p className="text-primary font-medium">
                Résultats rapides et durabilité ne sont pas opposés — à condition
                de s&apos;attaquer aux bons problèmes, dans le bon ordre, avec les
                bonnes personnes.
              </p>
            </div>
          </div>

          <div className="order-2">
            <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/presentation/image-resultat.jpg"
                alt="Résultats mesurables et durables en amélioration continue Lean"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── BLOC D : POURQUOI INDÉPENDANT ────────────────────────────────── */}
      <section className="section-divider py-20 px-6 bg-light">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-primary mb-8">
            Pourquoi un cabinet indépendant ?
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Le choix du statut indépendant n&apos;est pas anodin. Il reflète
            une façon d&apos;exercer le conseil : sans intermédiaire, sans
            équipe à rentabiliser, sans objectif commercial caché derrière
            la mission. Vous travaillez directement avec l&apos;expert qui
            connaît votre dossier.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Cette proximité change tout dans la qualité de l&apos;accompagnement.
            Je connais votre contexte, vos équipes, vos contraintes —
            et je m&apos;adapte en temps réel, sans validation hiérarchique
            ni process interne à respecter.
          </p>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">

          <h2 className="mb-6">
            Cette vision vous parle ?
          </h2>

          <p className="mb-10 text-light">
            Discutons de vos enjeux industriels et voyons ensemble comment
            construire une démarche d&apos;amélioration continue adaptée à votre réalité.
          </p>

          <Link
            href="/contact"
            className="bg-accent px-6 py-3 rounded shadow hover:opacity-90 transition"
          >
            Prendre contact
          </Link>

        </div>
      </section>

      <Footer />
    </>
  );
}
