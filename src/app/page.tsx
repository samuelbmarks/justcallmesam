import VideoBkgd from "./components/VideoBkgd";
import SocialIcons from "./components/SocialIcons";
import Name from "./components/Name"
import HomeContent from "./components/HomeContent";
import HomeButtons from "./components/HomeButtons";
import SocialIconsSm from "./components/SocialIconsSm";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-dvh">
      <VideoBkgd />
      <Name />
      <HomeContent />

      <div className="absolute z-20 top-10 max-sm:hidden">
        <SocialIcons/>
      </div>
  
      <div className="absolute z-20 top-10 sm:hidden">
        <SocialIconsSm/>
      </div>

      <div className="absolute z-20 bottom-10 sm:hidden">
        <HomeButtons />
      </div>
    </main>
  );
}
