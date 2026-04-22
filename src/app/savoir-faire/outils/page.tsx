import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Presentation() {
  return (
    <>
      <Navbar />

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h1>Nos outils</h1>
          <p>
          - VSM (Value Stream Mapping) <br />
          - 5S <br />
          - Kaizen <br />
          - SMED <br />
          - Kanban <br />
          - Matrices de performance <br />
          </p>
      </section>

      <Footer />
    </>
  );
}