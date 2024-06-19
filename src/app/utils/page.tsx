"use client"

import ContactForm from "../components/ContactForm";
import SocialIcons from "../components/SocialIcons";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-10 py-10 justify-center items-center w-full h-auto">
      <SocialIcons />
      <span>Check back later...</span>
    </main>
  );
}
