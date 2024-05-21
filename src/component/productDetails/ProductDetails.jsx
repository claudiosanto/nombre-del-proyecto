import { Link } from "react-router-dom";
import "./ProductDetails.css";
function ProductDetails({ product }) {
  return (
    <div className="Details">
      <ul>
        <p>precio :{product.price} </p>
        <p> descripcion:{product.descripcion}</p>
        <img className="img" src={product.imag} />
      </ul>
      <button>
        <Link className="boton" to="/">
          inicio
        </Link>{" "}
      </button>{" "}
      <br></br>
    </div>
  );
}

export default ProductDetails;
