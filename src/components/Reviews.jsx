import { Link } from "react-router-dom";
import TitleWatched from "./TitleWatched";

function Reviews(props) {
  const filteredShows = props.shows.filter((show) => show.fields.thoughts);

  filteredShows.sort((a, b) =>
    a.fields.title > b.fields.title
      ? 1
      : b.fields.title > a.fields.title
      ? -1
      : 0
  );

  return (
    <div className="app">
      <div className="new-watched">
        <button>
          <Link to="/newreview">Add a Review</Link>
        </button>
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
    </div>
  );
}

export default Reviews;
