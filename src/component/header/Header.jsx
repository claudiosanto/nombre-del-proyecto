import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header" >
      <h1>shoping fait </h1>
      <nav className="navigations"></nav>
      <Link to="/">product</Link>
    </div>
  );
}
export default Header;
