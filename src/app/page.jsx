import Hero from "./components/pages/main/hero";
import Cards from "./components/pages/main/cards";
import LearnMore from "./components/pages/main/learnMore";
import BuyParad from "./components/pages/main/buyParad";
import Community from "./components/pages/main/community";
import Footer from "./components/common/footer";
import Media from "./components/pages/main/media";
import Partners from "./components/pages/main/partners";

export default function Home() {
  return (
    <div className="home" id="home">
      <Hero />
      <Cards />
      <LearnMore />
      <BuyParad />
      <Partners />
      <Community />
      <Media />
    </div>
  );
}
