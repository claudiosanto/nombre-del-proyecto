
import './ProductDetails.css'
function ProductDetails({ product }) {
  return (
    <div className='Details'  >

      <p>{product.price}</p>
      <p>{product.color}</p>
      <img src={product.image} />
    </div>






  )
};
export default ProductDetails;