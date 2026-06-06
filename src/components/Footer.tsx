import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-light mt-20">

      {/* TOP */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Cabinet */}
        <div>
          <h3 className="text-accent mb-4">Cabinet</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/cabinet">Le cabinet</Link></li>
            <li><Link href="/vision">Notre vision</Link></li>
          </ul>
        </div>

        {/* Savoir-faire */}
        <div>
          <h3 className="text-accent mb-4">Savoir-faire</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/solutions">Nos solutions</Link></li>
            <li><Link href="/expertise">Notre expertises</Link></li>
            <li><Link href="/realisations">Nos réalisations</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-accent mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email : contact@rd-lean-conseil.fr</li>
            <li>Téléphone : 07 85 88 20 12</li>
            <li>Savoie, France</li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-accent mb-4">Votre projet</h3>
          <p className="text-sm mb-4 text-light">
            Parlons de vos enjeux industriels et identifions des leviers d’amélioration.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-5 py-3 text-sm hover:opacity-90 transition"
          >
            Demander un devis
          </Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-xs text-gray-300 gap-4">

          <span>© 2026 Rethink & Design — Tous droits réservés</span>

          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-accent transition">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-accent transition">
                Politique de confidentialité
            </Link>
            <Link href="/politique-cookies" className="hover:text-accent transition">
              Cookies
            </Link>
            <Link href="/cgu" className="hover:text-accent transition">
              CGU
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}