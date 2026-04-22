import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Formulaire reçu :", body);

  return Response.json({ success: true });
}