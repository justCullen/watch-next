import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/"><h2>WatchNext</h2></Link>
      <Link to="/reviews"><h3>Reviews</h3></Link>
    </nav>
  );
}

export default Header;