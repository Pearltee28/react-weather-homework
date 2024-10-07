import "./App.css";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Durban" />

        <footer>
          This project was coded by Pearl Ngubane and is{" "}
          <a
            href="https://github.com/Pearltee28/react-weather-homework.git"
            rel="noreferrer"
            target="_blank"
          >
            open sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
