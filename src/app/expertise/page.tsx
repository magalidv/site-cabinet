import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon expertise – Lean Manufacturing, Supply Chain, Performance industrielle",
  description:
    "10 ans d'expertise terrain en Lean Manufacturing, supply chain, maintenance et QHSE. Interventions dans les secteurs aéronautique, automobile et industrie. Accompagnement PME et ETI en Auvergne-Rhône-Alpes.",
};
export default function ExpertisePage() {

  const sections = [
    {
      title: "Une expertise forgée dans des secteurs industriels exigeants",
      text: `Fort d'une dizaine d'années d'expérience en industrie, j'ai développé mon expertise au sein d'environnements à fortes contraintes : aéronautique, automobile, industrie du carton et des emballages industriels, électronique. Des secteurs où la qualité, la sécurité, la réactivité et la fiabilité ne sont pas des options.`,
      highlight:
        "Cette expérience sectorielle me permet d'intervenir rapidement, avec des repères concrets et une compréhension immédiate des enjeux propres à votre environnement.",
      image: "/expertise/solution1.jpg",
      alt: "Expert Lean Manufacturing dans un environnement industriel aéronautique et automobile",
    },
    {
      title: "Une vision transversale de la chaîne de valeur industrielle",
      text: `Mon parcours m'a amené à intervenir sur l'ensemble des maillons de la chaîne de valeur : lignes de production et flux de fabrication, supply chain et gestion des approvisionnements, maintenance industrielle (préventive et curative), qualité, hygiène, sécurité et environnement (QHSE), amélioration continue et Lean Management.`,
      highlight:
        "Cette transversalité me permet d'avoir une lecture rapide et pertinente de vos enjeux — qu'ils soient opérationnels, organisationnels ou humains — et d'identifier les interactions entre vos différents flux.",
      image: "/expertise/solution2.jpg",
      alt: "Vision transversale de la chaîne de valeur et des flux industriels en Lean Management",
    },
    {
      title: "Une capacité d'adaptation rapide à votre organisation",
      text: `J'ai travaillé aussi bien dans des productions en grande série à forte cadence que dans des environnements à forte valeur ajoutée et à faibles volumes. J'ai évolué dans des grands groupes industriels structurés comme dans des PME industrielles agiles, avec des contraintes, des cultures et des niveaux de maturité très différents.`,
      highlight:
        "Quel que soit votre contexte, je m'adapte rapidement à votre organisation, vos contraintes et votre niveau de maturité Lean — sans imposer un modèle qui ne correspond pas à votre réalité.",
      image: "/expertise/solution3.jpg",
      alt: "Adaptation Lean Manufacturing dans des PME industrielles et grands groupes de production",
    },
    {
      title: "Des domaines d'intervention couvrant toute la performance industrielle",
      text: `J'interviens sur les problématiques clés de la performance industrielle : optimisation des flux logistiques et de production, amélioration de la productivité et du TRS, structuration de la maintenance industrielle (TPM), déploiement de démarches Lean et d'amélioration continue (5S, SMED, VSM, Kaizen), amélioration de la qualité et de la sécurité, pilotage de projets industriels stratégiques, réduction des encours et des délais.`,
      highlight:
        "Mon approche repose sur une compréhension fine du terrain, des solutions concrètes adaptées à votre situation, et une exigence constante de résultats mesurables.",
      image: "/expertise/solution4.jpg",
      alt: "Intervention Lean sur la productivité, le TRS, la TPM et les flux logistiques industriels",
    },
    {
      title: "La maîtrise des fondamentaux avant la complexité",
      text: `Dans des environnements industriels complexes, la performance durable ne vient pas de la sophistication des outils — elle vient de la maîtrise rigoureuse des fondamentaux. Standard de travail respecté, problème résolu à la bonne cause, indicateur suivi au bon rythme : ce sont ces basiques, bien ancrés, qui font la différence sur le long terme.`,
      highlight:
        "Mon rôle : vous aider à structurer, stabiliser et optimiser vos opérations pour construire une performance solide et pérenne — sans complexifier ce qui peut rester simple.",
      image: "/expertise/solution5.jpg",
      alt: "Maîtrise des fondamentaux Lean et standardisation des processus industriels",
    },
    {
      title: "Un engagement concret sur vos résultats",
      text: `Je ne livre pas des recommandations depuis l'extérieur. Je m'implique directement dans la mise en œuvre, aux côtés de vos équipes, jusqu'à l'obtention des résultats. Chaque mission est cadrée avec des objectifs clairs, des indicateurs de suivi et des livrables concrets. Ce que nous décidons ensemble, nous le mesurons ensemble.`,
      highlight:
        "Votre performance est un engagement partagé — pas une promesse de consultant.",
      image: "/expertise/solution6.jpg",
      alt: "Accompagnement terrain en amélioration continue avec les équipes industrielles",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-light py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-primary mb-6">
            Mon expertise en Lean Manufacturing & performance industrielle
          </h1>

          <p className="max-w-3xl mx-auto text-accent text-lg leading-relaxed">
            Un accompagnement ancré dans la réalité des sites industriels —
            pragmatique, exigeant et orienté résultats concrets.
          </p>

        </div>
      </section>

      {/* ── SECTIONS ALTERNÉES ───────────────────────────────────────────── */}
      {sections.map((item, index) => (
        <section
          key={index}
          className={`py-24 px-6 section-divider ${
            index % 2 === 0 ? "bg-white" : "bg-light"
          }`}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <div
              className={`order-2 ${
                index % 2 !== 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* TEXTE */}
            <div
              className={`order-1 ${
                index % 2 !== 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <h2 className="text-primary mb-6">
                {item.title}
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                {item.text}
              </p>

              <div className="border-l-4 border-accent pl-5">
                <p className="text-primary font-medium leading-relaxed">
                  {item.highlight}
                </p>
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <section className="bg-primary py-24 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="mb-6">
            Échangeons sur vos enjeux industriels
          </h2>

          <p className="text-light mb-10 leading-relaxed">
            Vous cherchez un accompagnement concret, adapté à votre contexte
            et à vos équipes ? Contactez-moi pour un premier échange
            sans engagement.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-accent px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Me contacter
          </Link>

        </div>
      </section>

      <Footer />
    </>
  );
}
