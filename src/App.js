import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { baseURL, config } from "./services/index";
import Header from "./components/Header";
import Form from "./components/Form";
import TitleToWatch from "./components/TitleToWatch";
import DetailToWatch from "./components/DetailToWatch";
import Reviews from "./components/Reviews";
import DetailWatched from "./components/DetailWatched";
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
      <Link to="/new">What's Next?</Link>
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
      <Route path="/watchnext/:id">
        <DetailToWatch shows={shows} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/new">
        <Form shows={shows} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form shows={shows} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/reviews/">
        <Reviews shows={shows} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/watched/:id">
        <DetailWatched shows={shows} setToggleFetch={setToggleFetch}/>
      </Route>
    </div>
  );
}

export default App;
