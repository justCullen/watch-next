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
        setTitle(foundShow.fields.title)
        setType(foundShow.fields.type);
        setSource(foundShow.fields.source);
        setYear(foundShow.fields.year);
        setPriority(foundShow.fields.priority);
      }
    }
  }, [props.shows, params.id])

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
    }
    addShow();
  };

  return (
    // <div className="new-form">
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label>Type:</label>
        <input value={type} onChange={(e) => setType(e.target.value)}></input>
        <label>Source:</label>
        <input value={source} onChange={(e) => setSource(e.target.value)}></input>
        <label>Year:</label>
        <input value={year} onChange={(e) => setYear(e.target.value)}></input>
        <label>Priority:</label>
        <input value={priority} onChange={(e) => setPriority(e.target.value)}></input>
        <button type="submit">Add</button>
      </form>
    // </div>
  )
}

export default Form;