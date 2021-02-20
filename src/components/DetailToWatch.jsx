import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services/";

function DetailToWatch(props) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [source, setSource] = useState("");
  const [year, setYear] = useState("");
  const [priority, setPriority] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (props.shows.length > 0 && params.id) {
      const foundShow = props.shows.find((show) => params.id === show.id);
      if (foundShow) {
        setTitle(foundShow.fields.title)
        setType(foundShow.fields.type);
        setSource(foundShow.fields.source);
        setYear(foundShow.fields.year);
        setPriority(foundShow.fields.priority);
      }
    }
  }, [])

  const destroy = async () => {
    const showURL = `${baseURL}/${params.id}`
    await axios.delete(showURL, config);
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  }

  return (
    <div className="detail-to-watch">
      <h3>{title}</h3>
      <h5>Type: {type}</h5>
      <h5>Source: {source}</h5>
      <h5>{year}</h5>
      <h5>Priority: {priority}</h5>
      <Link to={`/edittowatch/${params.id}`}>
        <button>Edit</button>
      </Link>
      <Link to={`/promote/${params.id}`}>
        <button>Watched It!</button>
      </Link>
        <button onClick={destroy}>Delete</button>
    </div>
  )
}

export default DetailToWatch;