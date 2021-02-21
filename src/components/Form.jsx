import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services/";

function Form(props) {
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
        setTitle(foundShow.fields.title);
        setType(foundShow.fields.type);
        setSource(foundShow.fields.source);
        setYear(foundShow.fields.year);
        setPriority(foundShow.fields.priority);
      }
    }
  }, [props.shows, params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const addShow = async () => {
      const fields = {
        title,
        type,
        source,
        year,
        priority,
      };
      if (params.id) {
        const showURL = `${baseURL}/${params.id}`;
        await axios.put(showURL, { fields }, config);
      } else {
        await axios.post(baseURL, { fields }, config);
      }
      props.setToggleFetch((curr) => !curr);
      history.push("/");
    };
    addShow();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <label>Movie/Series:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Movie">Movie</option>
        <option value="Series">Series</option>
      </select>
      <label>Service:</label>
      <select value={source} onChange={(e) => setSource(e.target.value)}>
        <option value="Netflix">Netflix</option>
        <option value="Hulu">Hulu</option>
        <option value="Disney+">Disney+</option>
        <option value="HBO Max">HBO Max</option>
        <option value="Prime Video">Prime Video</option>
        <option value="Plex">Plex</option>
        <option value="Personal Library">Personal Library</option>
      </select>
      <label>Year:</label>
      <input value={year} onChange={(e) => setYear(e.target.value)}></input>
      <label>Priority:</label>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
