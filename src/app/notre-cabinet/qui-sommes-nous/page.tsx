import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl text-primary mb-6">
          Qui sommes-nous ?
        </h1>

        <p className="mb-6">
          Cabinet spécialisé en amélioration continue, nous accompagnons les
          entreprises industrielles dans l’optimisation de leurs processus de
          production.
        </p>

        <p className="mb-6">
          Fort d’expériences au sein de groupes tels que Ford, DS Smith et
          Thales, notre consultant maîtrise les enjeux de performance,
          qualité et productivité sur des lignes de production complexes.
        </p>

        <p>
          Notre approche repose sur les principes du lean management et
          l’amélioration continue terrain.
        </p>
      </section>

      <Footer />
    </>
  );
}