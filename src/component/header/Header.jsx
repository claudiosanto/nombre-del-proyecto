import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1> ElevationCommerce</h1>
      <div>
        <nav className="nav">
          <Link className="items" to="/">
            inicio
          </Link>
          <br></br>
          <Link className="items" to="/category/tecnologia">
            tecnologia
          </Link>
          <br></br>
          <Link className="items" to="/category/ropa">
            Ropa
          </Link>
          <br></br>
        </nav>
      </div>
    </header>
  );
}
export default Header;
