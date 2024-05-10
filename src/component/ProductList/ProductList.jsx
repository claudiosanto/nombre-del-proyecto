import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ products }) {
  console.log(products);
  return (
    <div className="productlist">
      {products && products.length === 0 ? (
        <div className="loader"></div>
      ) : (
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      )}
    </div>
  );
}
export default ProductList;
