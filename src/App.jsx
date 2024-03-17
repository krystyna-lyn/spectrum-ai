import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Header from ".//components/Header";
import Hero from "./components/Hero.jsx";

function App() {

  return (
    <>
      <div className="pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden">
       <Header/>
        <ButtonGradient />
        <Hero/>
      </div>
    </>
  );
}

export default App;
