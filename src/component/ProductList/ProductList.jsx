import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

function ProductList({ products }) {
  console.log(products)
  return (
    <div className=' ProductList'  >
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}


    </div>

  )

}
export default ProductList;