import "./App.css";
import Context from "./components/context/Context";
import WeatherPage from "./components/pages/WeatherPage";

function App() {
  return (
    <Context>
      <WeatherPage />
    </Context>
  );
}

export default App;
