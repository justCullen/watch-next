import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailToWatch(props) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [source, setSource] = useState("");
  const [year, setYear] = useState("");
  const [priority, setPriority] = useState("");
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
        console.log(year);
      }
    }
  }, [])

  return (
    <div>
      <h3>{title}</h3>
      <h4>Type: {type}</h4>
      <h5>{source}</h5>
      <h5>{year}</h5>
      <h5>Priority: {priority}</h5>
    </div>
  )
}

export default DetailToWatch;