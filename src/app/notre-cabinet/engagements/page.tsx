import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Presentation() {
  return (
    <>
      <Navbar />

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h1>Nos engagements</h1>
        <p>
          - Approche terrain <br />
          - Résultats mesurables <br />
          - Transmission des compétences <br />
          - Adaptation à chaque client <br />
          - Confidentialité et éthique <br />
        </p>
      </section>

      <Footer />
    </>
  );
}