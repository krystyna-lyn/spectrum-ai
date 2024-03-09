import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./components/Button.jsx";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-20" href="#login">
          Login
        </Button>
        <ButtonGradient />
      </div>
    </>
  );
}

export default App;
