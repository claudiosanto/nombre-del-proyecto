import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className=" ProductCard">
      <h1>{product.title}</h1>
      <h2>{product.descripcion}</h2>

      <img src={product.imag} />
      <Link to={`/product/${product.id}`}>VER DETALLES</Link>
    </div>
  );
}
export default ProductCard;
