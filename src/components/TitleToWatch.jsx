import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services/";

function TitleToWatch(props) {

  const { title } = props.show.fields;

  return (
    <div className="new-title">
      <Link to={`/watchnext/${props.show.id}`}>
        <h3>{title}</h3>
        </Link>
    </div>
  )
}

export default TitleToWatch;