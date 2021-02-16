import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services/index";
import Header from "./components/Header"
import './App.css';

function App() {
  const [shows, setShows] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getMedia = async () => {
      const resp = await axios.get(baseURL, config);
      setShows(resp.data.records);
    };
    getMedia();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Header />


    </div>
  );
}

export default App;
