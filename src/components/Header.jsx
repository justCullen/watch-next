import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/"><h2>WatchNext</h2></Link>
      <Link to="/new">What's Next?</Link>
    </nav>
  );
}

export default Header;