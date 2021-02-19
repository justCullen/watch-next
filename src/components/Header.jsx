import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="header-link-one">
        <Link to="/"><h2>WatchNext</h2></Link>
      </div>
      <div className="header-link-two">
        <Link to="/reviews"><h2>Reviews</h2></Link>
      </div>
    </nav>
  );
}

export default Header;