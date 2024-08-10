"use client"

import ContactForm from "../components/ContactForm";
import SocialIcons from "../components/SocialIcons";
import BkgdGradient from "../components/BkgdGradient";

export default function Home() {
  return (
    <main className="relative flex flex-col py-10 justify-center items-center w-full h-auto overflow-hidden">
      <BkgdGradient />
      <SocialIcons />

      <ContactForm />
    </main>
  );
}
