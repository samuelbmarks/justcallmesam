import SocialIcons from "./components/SocialIcons";
import HomeContent from "./components/HomeContent";
import HomeButtons from "./components/HomeButtons";
import BkgdGradient from "./components/BkgdGradient";

export default function Home() {
  return (
    <main className="
      flex flex-col justify-center items-center
      h-dvh overflow-visible
    ">
      <BkgdGradient />
      
      <div className="absolute top-10">
        <SocialIcons />
      </div>

      <HomeContent />

      <div className="absolute z-20 bottom-10 sm:hidden">
        <HomeButtons />
      </div>
    </main>
  );
}
