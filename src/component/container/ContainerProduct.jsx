import { useEffect } from "react";
import "./ContainerProducts.css";
import ProductList from "../ProductList/ProductList";
import { useProductContext } from "../../context/Context";

function ContainerProduct() {
  const { products, GetProducts } = useProductContext();

  // se extrae los valores de ProductsContext atraves del hop useContext

  useEffect(() => {
    GetProducts();
  }, []);
  return (
    <div className="ContainerProduct">
      <ProductList products={products} />
    </div>
  );
}
export default ContainerProduct;
