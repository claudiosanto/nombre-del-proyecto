import { useEffect } from "react";
import "./ContainerProducts.css";
import ProductList from "../ProductList/ProductList";
import { useProductContext } from "../../context/Context";
import { useParams } from "react-router-dom";

function ContainerProduct() {
  const { products, GetProducts } = useProductContext();
  const { category } = useParams();
  //se extrae los valores de ProductsContext atraves del hop useContext

  useEffect(() => {
    GetProducts(category);
  }, [category]);
  return (
    <div className="ContainerProduct">
      <ProductList products={products} />
    </div>
  );
}
export default ContainerProduct;
