import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1> ElevationCommerce</h1>
      <nav>
        <Link className="inicio" to="/">
          INICIO
        </Link>
      </nav>
    </div>
  );
}
export default Header;
