import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="homepage__header">
        <h1 className="homepage__title">Aktuální nabídka</h1>
        <p className="homepage__subtitle">
          Nejnovější prémiové produkty od předních českých designérů. Doprava
          zdarma až k vám domů, na cenu nehledte.
        </p>
      </div>
    </>
  );
}

export default HomePage;
