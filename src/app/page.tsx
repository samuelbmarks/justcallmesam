import VideoBkgd from "./components/VideoBkgd";
import SocialIcons from "./components/SocialIcons";
import Name from "./components/Name"
import HomeContent from "./components/HomeContent";
import HomeButtons from "./components/HomeButtons";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen items-center">
      <VideoBkgd />
      <SocialIcons />
      <Name />
      <HomeContent />

      <div className="absolute z-20 bottom-10 sm:hidden">
        <HomeButtons />
      </div>
    </main>
  );
}
