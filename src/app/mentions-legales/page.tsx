import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | RD Conseil Lean",
  description: "Mentions légales du site RD Conseil Lean — éditeur, hébergement, propriété intellectuelle.",
  robots: { index: false, follow: false }, // ← noindex : Google n'indexe pas les pages légales
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />

      <section className="bg-light py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-primary mb-6">Mentions légales</h1>

          <p className="text-gray-700 max-w-3xl mb-12">
            Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004
            pour la confiance dans l'économie numérique, les informations
            relatives à l'éditeur et à l'exploitation du site RD Conseil Lean
            sont précisées ci-dessous.
          </p>

          <div className="space-y-8">

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-primary mb-4">1. Éditeur du site</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>RD Conseil Lean</strong></p>
                <p>Société à responsabilité limitée unipersonnelle (EURL)</p>
                <p>Directeur de publication : <strong>Rémy Dumoulin</strong></p>
                <p>Adresse : 275 avenue des Thermes, 73190 Challes-les-Eaux, France</p>
                <p>Téléphone : 07 85 88 20 12</p>
                <p>Email : contact@rd-conseil-lean.fr</p>
                <p>SIRET : 134 567 010 20120</p>
                {/* ⚠️ À compléter avec votre numéro de TVA intracommunautaire
                    lorsqu'il vous sera attribué, ou supprimer cette ligne
                    si vous n'êtes pas assujetti à la TVA. */}
                {/* <p>Numéro de TVA intracommunautaire : FR XX XXX XXX XXX</p> */}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-primary mb-4">2. Directeur de publication</h2>
              <p className="text-gray-700">
                Le directeur de publication du site est Rémy Dumoulin,
                représentant légal de RD Conseil Lean.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-primary mb-4">3. Hébergement</h2>
              <div className="space-y-2 text-gray-700">
                <p>Le site est hébergé par :</p>
                <p><strong>Hostinger International Ltd.</strong></p>
                <p>61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
                <p>Site web : https://www.hostinger.fr</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-primary mb-4">4. Objet du site</h2>
              <p className="text-gray-700 leading-relaxed">
                Le site RD Conseil Lean a pour objet de présenter les activités,
                prestations et domaines d'expertise du cabinet dans le domaine
                du conseil en amélioration continue, Lean Management,
                performance industrielle, organisation et pilotage opérationnel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-primary mb-4">5. Propriété intellectuelle</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'ensemble des éléments présents sur ce site — textes, images,
                illustrations, logos, documents, vidéos, graphismes et contenus
                rédactionnels — sont protégés par le Code de la propriété intellectuelle.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Toute reproduction, représentation, modification, diffusion ou
                exploitation, totale ou partielle, sans autorisation écrite
                préalable de RD Conseil Lean est interdite et susceptible de
                constituer une contrefaçon.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-primary mb-4">6. Responsabilité</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                RD Conseil Lean met tout en œuvre afin d'assurer l'exactitude
                des informations diffusées sur le site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Toutefois, l'entreprise ne saurait être tenue responsable des
                erreurs, omissions ou indisponibilités temporaires du site.
                Les informations publiées sont fournies à titre indicatif et
                peuvent être modifiées à tout moment sans préavis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-primary mb-4">7. Liens hypertextes</h2>
              <p className="text-gray-700 leading-relaxed">
                {/* Correction : "RD Lean Conseil" → "RD Conseil Lean" */}
                Le site peut contenir des liens vers des sites tiers.
                RD Conseil Lean ne dispose d'aucun contrôle sur ces sites
                et ne peut être tenu responsable de leur contenu, de leur
                politique de confidentialité ou de leur disponibilité.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-primary mb-4">8. Protection des données personnelles</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les données collectées via le formulaire de contact sont utilisées
                exclusivement afin de répondre aux demandes formulées par les
                utilisateurs et dans le cadre de la relation commerciale pouvant
                en découler.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les informations recueillies ne sont jamais vendues ni cédées
                à des tiers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés, vous disposez d'un
                droit d'accès, de rectification, de suppression, d'opposition
                et de limitation du traitement de vos données personnelles.
                Pour exercer ces droits, contactez-nous à : contact@rd-conseil-lean.fr.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-primary mb-4">9. Cookies et mesure d'audience</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le site peut utiliser des cookies ou technologies similaires
                afin d'améliorer l'expérience utilisateur et de mesurer
                l'audience du site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Google Analytics est utilisé à des fins statistiques. Les
                données collectées sont anonymisées et ne permettent pas
                d'identifier personnellement les visiteurs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-primary mb-4">10. Droit applicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes mentions légales sont soumises au droit français.
                Tout litige relatif à l'utilisation du site relève de la
                compétence exclusive des juridictions françaises compétentes.
              </p>
            </div>

            <div className="bg-light p-8 rounded-xl border border-accent/20">
              <h2 className="text-primary mb-4">Contact</h2>
              <div className="space-y-1 text-gray-700">
                <p>RD Conseil Lean</p>
                <p>275 avenue des Thermes, 73190 Challes-les-Eaux, Savoie</p>
                <p>07 85 88 20 12</p>
                <p>contact@rd-conseil-lean.fr</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
