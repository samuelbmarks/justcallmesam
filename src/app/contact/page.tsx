"use client"

import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SocialIcons from "../components/SocialIcons";
import BkgdGradient from "../components/BkgdGradient";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-10 py-10 justify-center items-center w-full h-auto overflow-hidden">
      <BkgdGradient />
      <SocialIcons />
      
      <div className="z-20 text-center text-slate-900 dark:text-slate-100 flex flex-col gap-2 w-[400px] max-w-[75%]">
        <div>Please fill out the form below. This is the best way to reach me. You may also <a className="text-blue-600 dark:text-blue-300" href="mailto:sam@justcallmesam.com">send me an email directly.</a></div>
        <div className="text-xs">Each form submission will generate a unique transaction code.</div>
        <Link href="" className="italic text-xs text-blue-600 dark:text-blue-300">What can I do with this code?</Link>
      </div>

      <ContactForm />
    </main>
  );
}
