import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
// import { baseURL, config } from "./services/index";
// import HeaderReviews from "./HeaderReviews";
// import Form from "./Form";
import Footer from "./Footer";
import TitleWatched from "./TitleWatched";

// import './App.css';

function Reviews(props) {
  // const [shows, setShows] = useState([]);
  // const [toggleFetch, setToggleFetch] = useState(false);

  const filteredShows = props.shows.filter(show => show.fields.thoughts);

  filteredShows.sort((a, b) => (a.fields.title > b.fields.title) ? 1 : ((b.fields.title > a.fields.title) ? -1 : 0));

  return (
    <div className="app">
      {/* <HeaderReviews /> */}
      {/* <Route exact path="/"> */}
      <div className="new-watched">
        <button><Link to="/newreview">Watch Something?</Link></button>
        </div>
        <main className="title-watched">
          {filteredShows.map((show) => (
            <TitleWatched
              key={show.id}
              show={show}
              setToggleFetch={props.setToggleFetch}
            />
          ))}
        </main>
        {/* <footer className="Footer">
          <Footer />
        </footer> */}
      {/* </Route> */}
      {/* <Route path="/newreview">
        <Form shows={props.shows} setToggleFetch={props.setToggleFetch} />
      </Route> */}
      {/* <Route path="/edit/:id">
        <Form shows={shows} setToggleFetch={setToggleFetch} />
      </Route> */}
    </div>
  );
}

export default Reviews;
