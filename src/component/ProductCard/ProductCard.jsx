import { Link } from "react-router-dom";
import "./ProductCard.css";
function ProductCard({ product }) {
  return (
    <div className=" ProductCard">
      <img src={product.imag} />
      <h1 className="title">{product.title}</h1>
      <h2>{product.descripcion}</h2>
      <Link to={`/product/${product.id}`}>VER DETALLES</Link>
    </div>
  );
}
export default ProductCard;
