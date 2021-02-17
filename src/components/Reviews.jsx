import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
// import { baseURL, config } from "./services/index";
// import HeaderReviews from "./HeaderReviews";
// import Form from "./Form";
import TitleWatched from "./TitleWatched";
// import DetailWatched from "./DetailWatched";
// import './App.css';

function App(props) {
  // const [shows, setShows] = useState([]);
  // const [toggleFetch, setToggleFetch] = useState(false);

  return (
    <div className="App">
      {/* <HeaderReviews /> */}
      {/* <Route exact path="/"> */}
      <Link to="/newreview">Watch Something?</Link>
        <div className="show-container">
          {props.shows.map((show) => (
            <TitleWatched
              key={show.id}
              show={show}
              setToggleFetch={props.setToggleFetch}
            />
          ))}
        </div>
      {/* </Route> */}
      {/* <Route path="/watched/:id">
        <DetailWatched shows={props.shows} setToggleFetch={props.setToggleFetch}/>
      </Route> */}
      {/* <Route path="/newreview">
        <Form shows={props.shows} setToggleFetch={props.setToggleFetch} />
      </Route> */}
      {/* <Route path="/edit/:id">
        <Form shows={shows} setToggleFetch={setToggleFetch} />
      </Route> */}
    </div>
  );
}

export default App;
