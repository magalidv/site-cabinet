import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SavoirFairePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-light py-20 px-6 text-center">
        <h1 className="text-primary mb-6">
          Solutions pour améliorer durablement votre performance
        </h1>

        <p className="max-w-2xl mx-auto text-gray-700">
          Vous cherchez à gagner en productivité, structurer vos opérations ou accélérer votre transformation Lean ?
          Je vous accompagne avec une approche terrain, pragmatique et orientée résultats.
        </p>
      </section>

      {/* SECTION TEMPLATE */}
      {[
        {
          title: "Analyse de la chaîne de valeur",
          subtitle: "Identifiez rapidement vos pertes et activez des gains concrets",
          text: "Je vous aide à cibler rapidement les leviers à fort impact grâce à une analyse simplifiée et efficace.",
          image: "/image_reflexion.jpg",
          points: [
            "Vision claire des flux",
            "Identification des gaspillages",
            "Plan d’actions priorisé",
          ],
        },
        {
          title: "Diagnostic de maturité Lean",
          subtitle: "Sachez exactement où agir pour progresser efficacement",
          text: "Un diagnostic structuré pour définir vos priorités d’action.",
          image: "/image_note.jpg",
          points: [
            "Compréhension du niveau actuel",
            "Identification des axes de progrès",
            "Priorisation claire",
          ],
        },
        {
          title: "Animation de la performance",
          subtitle: "Pilotez votre activité au quotidien",
          text: "Mise en place d’un pilotage simple et efficace.",
          image: "/pexels-ordi.jpg",
          points: [
            "Indicateurs pertinents",
            "Rituels courts",
            "Réactivité accrue",
          ],
        },
        {
          title: "Culture Lean terrain",
          subtitle: "Ancrez les bons réflexes",
          text: "Déploiement d’outils concrets directement sur le terrain.",
          image: "/image_whiteboard.jpg",
          points: [
            "5S",
            "Management visuel",
            "Standards de travail",
          ],
        },
        {
          title: "Amélioration de la productivité",
          subtitle: "Produisez plus, mieux",
          text: "Optimisation concrète de vos performances industrielles.",
          image: "/pexels-whiteboard.jpg",
          points: [
            "Analyse Pareto",
            "SMED",
            "TPM",
          ],
        },
        {
          title: "Optimisation des implantations",
          subtitle: "Gagnez en efficacité sans investir",
          text: "Optimisation des flux et des surfaces existantes.",
          image: "/pexels-plan.jpg",
          points: [
            "Réduction des déplacements",
            "Amélioration ergonomie",
            "Augmentation capacité",
          ],
        },
        {
          title: "Gestion de projets industriels",
          subtitle: "Sécurisez vos projets",
          text: "Pilotage structuré de vos projets stratégiques.",
          image: "/image_chaine.jpg",
          points: [
            "Gestion des risques",
            "Coordination",
            "Feuille de route claire",
          ],
        },
        {
          title: "Optimisation des flux",
          subtitle: "Fluidifiez vos opérations",
          text: "Mise en place de solutions type CONWIP.",
          image: "/pexels-bois.jpg",
          points: [
            "Réduction des encours",
            "Visibilité accrue",
            "Maîtrise des délais",
          ],
        },
      ].map((item, index) => (
        <section
          key={index}
          className={`py-20 px-6 ${
            index % 2 === 0 ? "bg-white" : "bg-light"
          }`}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <div className={`${index % 2 !== 0 ? "order-2 md:order-1" : ""}`}>
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* TEXTE */}
            <div className={`${index % 2 !== 0 ? "order-1 md:order-2" : ""}`}>
              <h2 className="text-primary mb-2">{item.title}</h2>
              <h3 className="text-accent mb-4">{item.subtitle}</h3>

              <p className="text-gray-700 mb-4">{item.text}</p>

              <ul className="space-y-2 text-gray-700">
                {item.points.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>

              <div className="mt-6 border-l-4 border-accent pl-4">
                <p className="text-primary font-medium">
                  Objectif : générer des résultats concrets rapidement.
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA FINAL */}
      <section className="bg-primary py-20 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="mb-6">
            Prêt à améliorer votre performance ?
          </h2>

          <p className="mb-8 text-light">
            Chaque entreprise est différente. Discutons ensemble de vos enjeux
            pour construire une solution adaptée.
          </p>

          <a
            href="/contact"
            className="bg-accent px-6 py-3 rounded shadow hover:opacity-90 transition"
          >
            Demande d'informations
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}