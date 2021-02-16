import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h2>WatchNext</h2>
      <Link to="/">Home</Link>
      <Link to="/new">What's Next?</Link>
    </nav>
  );
}

export default Header;