import { Link } from "react-router-dom";
import "./Header.css";
import logo2 from "../../assets/icons/logo2.png";

function Header() {
  return (
    <header className=" containerheader">
      <div className="hadertitle">
        <img src={logo2} alt="logo" />
        <h1> ElevationCommerce</h1>
      </div>
      <div>
        <nav className="containeritems">
          <Link to="/">inicio</Link>
          <br></br>
          <Link to="/category/tecnologia">tecnologia</Link>
          <br></br>
          <Link to="/category/ropa">Ropa</Link>
          <input type="text">buscar</input>
        </nav>
      </div>
    </header>
  );
}
export default Header;
