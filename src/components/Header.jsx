import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
        <Link to="/"><h2 className="to-do">WatchNext</h2></Link>
        <Link to="/reviews"><h3 className="to-done">Reviews</h3></Link>
    </nav>
  );
}

export default Header;