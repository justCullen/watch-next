import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services/";

function TitleWatched(props) {

  const { title } = props.show.fields;

  return (
    <div className="watched-title">
      <Link to={`/watched/${props.show.id}`}>
        <h3>{title}</h3>
        </Link>
    </div>
  )
}

export default TitleWatched;