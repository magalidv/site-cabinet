import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="relative h-[75vh] flex items-center justify-center text-center">

        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative text-white px-6">
          <h1 className="mb-6">
            Amélioration continue & performance industrielle
          </h1>

          <p className="max-w-xl mx-auto text-lg mb-8 text-light drop-shadow-md">
            Optimisez vos processus de production et gagnez en rentabilité grâce à une approche lean pragmatique.
          </p>

          <button className="btn">
            Demander un accompagnement
          </button>
        </div>
      </section>

      <section className="section section-no-divider">
        <h2 className="text-primary mb-6">
          Une expertise terrain reconnue
        </h2>

        <p>
          Expérience acquise chez <span className="text-accent font-medium">Ford</span>, 
          <span className="text-accent font-medium"> DS Smith</span> et 
          <span className="text-accent font-medium"> Thales</span>.
        </p>
      </section>

      <section className="section section-divider bg-soft py-20 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

    <div className="bg-white p-6 shadow-sm">
      <h3 className="text-accent mb-4">Audit</h3>
      <p>Analyse complète de vos flux de production.</p>
    </div>

    <div className="bg-white p-6 shadow-sm">
      <h3 className="text-accent mb-4">Lean management</h3>
      <p>Mise en place d’outils d’amélioration continue.</p>
    </div>

    <div className="bg-white p-6 shadow-sm">
      <h3 className="text-accent mb-4">Performance</h3>
      <p>Optimisation de la rentabilité industrielle.</p>
    </div>

  </div>
</section>
<Footer />
    </>
  );
}