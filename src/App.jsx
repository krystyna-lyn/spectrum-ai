import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Header from ".//components/Header";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Collaboration from "./components/Collaboration.jsx";
import Services from "./components/Services.jsx";

function App() {

  return (
    <>
      <div className="pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ButtonGradient />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
    </>
  );
}

export default App;
