import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services/";

function Promote(props) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [source, setSource] = useState("");
  const [year, setYear] = useState("");
  // const [priority, setPriority] = useState("");
  const [recommend, setRecommend] = useState("");
  const [thoughts, setThoughts] = useState("");
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
        // setPriority(foundShow.fields.priority);
        setRecommend(foundShow.fields.recommend);
        setThoughts(foundShow.fields.thoughts);
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
        // priority,
        recommend,
        thoughts,
      };
      if (params.id) {
        const showURL = `${baseURL}/${params.id}`;
        await axios.put(showURL, { fields }, config);
      } else {
        await axios.post(baseURL, { fields }, config);
      }
        props.setToggleFetch((curr) => !curr);
      history.push("/reviews");
    }
    addShow();
  };

  return (
    <form className="promote" onSubmit={handleSubmit}>
      <label>Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <label>Type:</label>
      <input value={type} onChange={(e) => setType(e.target.value)}></input>
      <label>Source:</label>
      <input value={source} onChange={(e) => setSource(e.target.value)}></input>
      <label>Year:</label>
      <input value={year} onChange={(e) => setYear(e.target.value)}></input>
      {/* <label>Priority:</label>
      <input value={priority} onChange={(e) => setPriority(e.target.value)}></input> */}
      <label>Recommend:</label>
      <input value={recommend} onChange={(e) => setRecommend(e.target.value)}></input>
      <label>Review:</label>
      <input value={thoughts} onChange={(e) => setThoughts(e.target.value)}></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default Promote;