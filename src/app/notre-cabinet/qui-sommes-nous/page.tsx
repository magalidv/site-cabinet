import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-light py-20 px-6 text-center">
        <h1 className="text-primary mb-6">
          Un expert terrain au service de la performance industrielle
        </h1>
        <h3 className="max-w-5xl mx-auto text-accent">
          10 années d’expérience en industrie au cœur des opérations pour accompagner
          concrètement la performance des entreprises.
        </h3>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-primary mb-6">
              Une expérience solide au cœur des opérations
            </h2>

            <p className="mb-4 text-gray-700">
              Fort de 10 années d’expérience en industrie, j’ai évolué sur des fonctions clés :
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Ingénieur supply chain</li>
              <li>• Ingénieur de production</li>
              <li>• Responsable multi-sites de laboratoires de développement</li>
              <li>• Directeur amélioration continue en environnement industriel</li>
            </ul>

            <div className="mt-6 border-l-4 border-accent pl-4">
            <p className="mt-6 text-gray-700">
              Ce parcours me permet aujourd’hui d’avoir une vision globale des enjeux industriels :
              production, flux, organisation et performance.
            </p>
            </div>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image src="/pexels-hommeface.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* REALITE TERRAIN */}
      <section className="bg-light py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image src="/image_usine.jpg" alt="" fill className="object-cover" />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-primary mb-6">
              Une expérience concrète, directement applicable sur votre terrain
            </h2>

            <p className="mb-4 text-gray-700">
              Au fil de ces expériences, j’ai été confronté aux réalités des sites :
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Exigences de productivité</li>
              <li>• Contraintes de délais</li>
              <li>• Gestion des équipes</li>
              <li>• Amélioration continue au quotidien</li>
            </ul>

            <div className="mt-6 border-l-4 border-accent pl-4">
              <p className="text-primary font-medium mb-2">
                Aujourd’hui, j’accompagne les entreprises pour :
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>• Structurer leur organisation</li>
                <li>• Améliorer leur performance opérationnelle</li>
                <li>• Résoudre rapidement leurs problématiques terrain</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="section">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-primary mb-6">
              Une approche pragmatique, orientée résultats
            </h2>

            <p className="mb-4 text-gray-700 italic">
              Ma conviction est simple : dans l’industrie, les solutions les plus efficaces
              sont souvent les plus simples.
            </p>

            <p className="mb-4 text-gray-700">
              Mon approche repose sur :
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Une immersion terrain</li>
              <li>• Une compréhension rapide de vos enjeux</li>
              <li>• Des actions concrètes et applicables immédiatement</li>
            </ul>

            <div className="mt-6 border-l-4 border-accent pl-4">
              <p className="text-primary font-medium">
                Objectif : générer des résultats visibles rapidement, sans complexifier votre organisation.
              </p>
            </div>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image src="/pexels-ingenieur.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="bg-primary py-20 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="mb-6">
            Un partenaire pour accompagner votre développement
          </h2>

          <p className="text-light">
            Aujourd’hui, j’accompagne les entreprises industrielles dans leurs projets
            de transformation et d’amélioration continue, avec une priorité :
            créer de la valeur durable pour votre activité.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}