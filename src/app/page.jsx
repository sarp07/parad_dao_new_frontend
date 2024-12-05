import Cards from "./components/pages/main/cards";
import Hero from "./components/pages/main/hero";

export default function Home() {
   return (
      <div className="home">
         <Hero />
         <Cards />
      </div>
   );
}
