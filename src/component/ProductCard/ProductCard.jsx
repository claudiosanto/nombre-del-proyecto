import { Link } from 'react-router-dom';
import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className=' ProductCard' >
      <h1>{product.title}   key={product.id} </h1>
      <p>{product.price}</p>
      <p>{product.color}</p>
      <img src={product.image} />
      <Link to={`/product/${product.id}`}>VER DETALLES</Link >
    </div >
  )
}
export default ProductCard;