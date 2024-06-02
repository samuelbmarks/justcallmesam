import SocialIcons from "./components/SocialIcons";
import HomeContent from "./components/HomeContent";
import HomeButtons from "./components/HomeButtons";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-dvh overflow-visible">
      <HomeContent />
      <SocialIcons />

      <div className="absolute z-20 bottom-10 sm:hidden">
        <HomeButtons />
      </div>
    </main>
  );
}
