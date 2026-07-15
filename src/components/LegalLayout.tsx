// src/components/LegalLayout.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  children,
}: Props) {
  return (
    <>
      <Navbar />

      <section className="bg-light py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-primary mb-10">
            {title}
          </h1>

          <div className="prose max-w-none prose-p:text-gray-700 prose-li:text-gray-700">
            {children}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}