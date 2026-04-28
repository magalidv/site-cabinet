import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AProposPage() {
  return (
    <>
      <Navbar />

      {/* EN-TETE */}
      <section className="bg-light py-20 px-6 text-center">
        <h1 className="text-primary mb-6">
          À propos
        </h1>

        <p className="max-w-2xl mx-auto text-gray-700">
          Un expert terrain au service de la performance industrielle et de l’amélioration continue.
        </p>
      </section>

      {/* ===== BLOC A ===== */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXTE */}
          <div className="order-1">
            <h2 className="text-primary mb-4">
              Un expert terrain au service de la performance industrielle
            </h2>

            <p className="text-gray-700 mb-6">
              Fort de <strong className="text-accent">10 années d’expérience en industrie</strong>, 
              j’ai évolué sur des fonctions clés au cœur des opérations :
            </p>

            <div className="border-l-4 border-accent pl-4">
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Ingénieur supply chain</li>
              <li>• Ingénieur de production</li>
              <li>• Responsable multi-sites de laboratoires</li>
              <li>• Directeur amélioration continue</li>
            </ul>
            </div>

            <p className="text-gray-700">
              Ce parcours me permet aujourd’hui d’avoir une <strong className="text-accent">vision globale</strong> des enjeux industriels :
              production, flux, organisation et performance.
            </p>
          </div>

          {/* IMAGE */}
          <div className="order-2">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image src="/presentation/image-conseil.jpg" alt="" fill className="object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* ===== BLOC B ===== */}
      <section className="section-divider py-24 px-6 bg-light">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="order-2 md:order-1">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image src="/presentation/image-suivi.jpg" alt="" fill className="object-cover" />
            </div>
          </div>

          {/* TEXTE */}
          <div className="order-1 md:order-2">
            <h2 className="text-primary mb-4">
              Une expérience concrète, directement applicable sur votre terrain
            </h2>

            <p className="text-gray-700 mb-6">
              Au fil de ces expériences, j’ai été confronté aux réalités des sites industriels :
            </p>

            <div className="border-l-4 border-accent pl-4">
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Exigences de productivité</li>
                <li>• Contraintes de délais</li>
                <li>• Gestion des équipes</li>
                <li>• Amélioration continue au quotidien</li>
            </ul>
            </div>

            <p className="text-gray-700 mb-6">
              Je mets aujourd’hui cette expertise au service des entreprises pour :
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Structurer leur organisation</li>
              <li>• Améliorer leur performance opérationnelle</li>
              <li>• Résoudre rapidement leurs problématiques terrain</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===== BLOC C ===== */}
      <section className="section-divider py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXTE */}
          <div className="order-1">
            <h2 className="text-primary mb-4">
              Une approche pragmatique, orientée résultats
            </h2>

            <p className="text-gray-700 mb-6">
              Ma conviction est simple :
              <strong className="text-accent"> dans l’industrie, les solutions les plus efficaces sont souvent les plus simples.</strong>
            </p>

            <p className="text-gray-700 mb-6">
              Mon approche repose sur :
            </p>

            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Une immersion terrain</li>
              <li>• Une compréhension rapide des enjeux</li>
              <li>• Des actions concrètes et applicables immédiatement</li>
            </ul>

            <div className="border-l-4 border-accent pl-4">
              <p className="text-primary font-medium">
                Objectif : générer des résultats visibles rapidement, sans complexifier votre organisation.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-2">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image src="/presentation/image-resultat.jpg" alt="" fill className="object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="mb-6">
            Envie d’échanger sur vos enjeux industriels ?
          </h2>

          <p className="mb-8 text-light">
            Discutons ensemble de votre situation et identifions rapidement des leviers d’amélioration.
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