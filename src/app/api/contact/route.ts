import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, company, message } = await req.json();
  console.log("API KEY:", process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "contact@rd-conseil-lean.fr",
      to: "remy.dumoulin@rd-conseil-lean.fr",
      subject: "Nouvelle demande de devis",
      html: `
        <h2>Nouveau message</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Entreprise :</strong> ${company}</p>
        <p><strong>Message :</strong><br/> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error });
  }
}
