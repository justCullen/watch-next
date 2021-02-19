import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { baseURL, config } from "./services/index";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Form from "./components/Form";
import Promote from "./components/Promote";
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

  const filteredShows = shows.filter(show => !show.fields.thoughts);

  return (
    <div className="app">
        <Header />
      <Route exact path="/">
        <div className="new-entry">
          <Link to="/new">What's Next?</Link>
        </div>
        <main className="title-to-watch">
          {filteredShows.map((show) => (
            <TitleToWatch
              key={show.id}
              show={show}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </main>
      </Route>
        {/* <footer className="Footer">
          <Footer />
        </footer> */}
      <Route path="/watchnext/:id">
        <DetailToWatch shows={shows} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/new">
        <Form shows={shows} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edittowatch/:id">
        <Form shows={shows} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/promote/:id">
        <Promote shows={shows} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/reviews/">
        <Reviews shows={shows} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/newreview/">
        <Promote shows={shows} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/watched/:id">
        <DetailWatched shows={shows} setToggleFetch={setToggleFetch}/>
      </Route>
    </div>
  );
}

export default App;
