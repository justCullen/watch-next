import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services/index";
import Header from "./components/Header";
import TitleToWatch from "./components/TitleToWatch";
import DetailToWatch from "./components/DetailToWatch";
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
      <Route exact path="/">
        <div className="show-container">
          {shows.map((show) => (
            <TitleToWatch
              key={show.id}
              show={show}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </div>
      </Route>
      <Route path="/features/:id">
        <DetailToWatch shows={shows} />
      </Route>
    </div>
  );
}

export default App;
