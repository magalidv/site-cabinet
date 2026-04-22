import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Presentation() {
  return (
    <>
      <Navbar />

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h1>Nos réalisations</h1>
          <p>
          - Optimisation ligne production → +20% productivité <br />
          - Réduction déchets industriels <br />
          - Mise en place lean manufacturing <br />
          </p>
      </section>

      <Footer />
    </>
  );
}