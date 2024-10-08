import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.shecodes.io/graduates/83802-josephine-lu-ching-jacobs"
          target="_blank"
          rel="noreferrer"
        >
          Josephine Jacobs
        </a>{" "}
        open-sourced on{" "}
        <a
          href="https://github.com/JosephineJacobs/weather-react-123"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and website hosted on{" "}
        <a
          href="https://weather-react-123.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
    </div>
  );
}
