import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SavoirFairePage() {
  const sections = [
    {
      title: "Un expert de la performance industrielle, au service des PME exigeantes",
      text: `Fort d’une dizaine d’années d’expérience en industrie, j’ai développé mon expertise au sein d’environnements exigeants, notamment dans des secteurs tels que l’aéronautique, l’automobile et l’industrie du carton.`,
      highlight:
        "Des secteurs où les exigences en qualité, sécurité, performance et fiabilité sont parmi les plus élevées.",
      image: "/expertise/solution1.jpg",
    },
    {
      title: "Une vision globale de l’industrie, du terrain à la stratégie",
      text: `Mon parcours m’a permis d’intervenir sur l’ensemble de la chaîne de valeur industrielle : production et lignes de fabrication, supply chain et gestion des flux, maintenance industrielle, qualité, sécurité et environnement (QHSE), amélioration continue et Lean management.`,
      highlight:
        "Cette transversalité me permet d’avoir une lecture rapide et pertinente de vos enjeux, qu’ils soient opérationnels ou organisationnels.",
      image: "/expertise/solution2.jpg",
    },
    {
      title: "Une expertise éprouvée dans des environnements complexes",
      text: `J’ai évolué aussi bien dans des productions en grande série à forte cadence que dans des environnements à forte valeur ajoutée et exigences élevées. Mais également au sein de grands groupes industriels structurés comme dans des PME industrielles agiles.`,
      highlight:
        "Résultat : une capacité à m’adapter rapidement à votre organisation, vos contraintes et votre niveau de maturité.",
      image: "/expertise/solution3.jpg",
    },
    {
      title: "Un accompagnement haut de gamme, orienté résultats",
      text: `J’interviens sur des problématiques clés pour la performance industrielle : optimisation des flux logistiques, amélioration de la productivité des lignes de production, structuration de la maintenance industrielle, déploiement de démarches Lean et d’amélioration continue, amélioration de la qualité, de la sécurité et de l’environnement, pilotage de projets industriels stratégiques, réduction des coûts et amélioration de la performance globale.`,
      highlight:
        "Mon approche repose sur une compréhension fine du terrain, des solutions concrètes et adaptées, ainsi qu’une exigence élevée de résultats.",
      image: "/expertise/solution4.jpg",
    },
    {
      title: "Une conviction forte : la simplicité au service de la performance",
      text: `Dans des environnements industriels complexes, la performance ne vient pas de la complexité, mais de la maîtrise des fondamentaux.`,
      highlight:
        "Mon rôle : vous aider à structurer, simplifier et optimiser vos opérations pour atteindre une performance durable et mesurable.",
      image: "/expertise/solution5.jpg",
    },
    {
      title: "Un partenaire engagé dans votre réussite",
      text: `Je m’inscris comme un partenaire opérationnel, engagé à vos côtés pour atteindre vos objectifs.`,
      highlight:
        "Votre performance devient un engagement partagé.",
      image: "/expertise/solution6.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-light py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-primary mb-6">
          Notre expertise
        </h1>
        <h3 className="max-w-5xl mx-auto text-accent">
         Un accompagnement industriel exigeant, pragmatique et orienté résultats
            pour améliorer durablement votre performance.
        </h3>
        </div>
      </section>

      {/* SECTIONS */}
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
                  alt=""
                  fill
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

      {/* CTA FINAL */}
      <section className="bg-primary py-24 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">

          <h2 className="mb-6">
            Échangeons sur vos enjeux industriels
          </h2>

          <p className="text-light mb-10 leading-relaxed">
            Vous recherchez un accompagnement exigeant, pragmatique et orienté résultats ?
            Contactez-moi pour un premier échange confidentiel.
          </p>

          <a
            href="/contact"
            className="inline-block bg-accent px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Nous contacter
          </a>

        </div>
      </section>

      <Footer />
    </>
  );
}