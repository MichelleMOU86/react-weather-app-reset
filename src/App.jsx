import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Weather app</h1>
      <footer>
        This project was coded by Michelle Wilson and is open-sourced on{" "}
        <a
          href="https://github.com/MichelleMOU86/react-weather-app-reset"
          target="_blank"
        >
          GitHub
        </a>
        .
      </footer>
    </div>
  );
}
