"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Message envoyé !");
  };

  return (
    <>
      <Navbar />

      <section className="py-20 px-6 max-w-2xl mx-auto">
        <h1>Informations de contact</h1>
        <p>
          Email : contact@cabinet.fr  <br />
          Téléphone : 06 07 08 09 10 <br />
          Localisation : Savoie <br />
        </p>
      </section>

      <Footer />
    </>
  );
}