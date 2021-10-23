import { useState, useEffect } from "react";
import "./App.css";
// axios
import axios from "axios";
// components
import Region from "./components/Region";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [region, setRegion] = useState("all");

  // API url
  let apiUrl;

  useEffect(() => {
    const getCountries = async () => {
      if (region === "all") {
        apiUrl = "https://restcountries.com/v2/all";
      } else {
        apiUrl = `https://restcountries.com/v2/continent/${region}`;
      }

      setIsLoading(true);

      try {
        const response = await axios.get(apiUrl);
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    getCountries();
  }, [region]);

  return (
    <div className="container">
      <h1 className="header">
        <a href="https://restcountries.com/" target="_blank">
          Countries API
        </a>
      </h1>
      {/* region radio  */}
      <Region region={region} setRegion={setRegion} />
      {/* countries or loading  */}
      {isLoading ? (
        <div className="loading-circle"></div>
      ) : (
        <Countries countries={countries} />
      )}
    </div>
  );
}

export default App;
