import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services/";

function Promote(props) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [source, setSource] = useState("");
  const [year, setYear] = useState("");
  const [recommend, setRecommend] = useState("");
  const [thoughts, setThoughts] = useState("");
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
        setRecommend(foundShow.fields.recommend);
        setThoughts(foundShow.fields.thoughts);
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
    };
    addShow();
  };

  return (
    <form className="promote" onSubmit={handleSubmit}>
      <label>Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <label>Movie/Series: </label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
      <option>Choose Movie or Series</option>
        <option>Movie</option>
        <option>Series</option>
      </select>
      <label>Service: </label>
      <select value={source} onChange={(e) => setSource(e.target.value)}>
      <option>Choose a Service</option>
        <option>Netflix</option>
        <option>Hulu</option>
        <option>Disney+</option>
        <option>HBO Max</option>
        <option>Prime Video</option>
        <option>Plex</option>
        <option>Personal Library</option>
      </select>
      <label>Year:</label>
      <input value={year} onChange={(e) => setYear(e.target.value)}></input>
      <label>Recommend:</label>
      <select value={recommend} onChange={(e) => setRecommend(e.target.value)}>
        <option>Recommend this?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <label>Review:</label>
      <input
        value={thoughts}
        onChange={(e) => setThoughts(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default Promote;
