import { useEffect, useState } from "react";
import "./ContainerDetails.css";
import ProductDetails from "../productDetails/ProductDetails";
import { json, useParams } from "react-router-dom";
import { useProductContext } from "../../context/Context";

function ContainerDetails() {
  const { GetElementById } = useProductContext();
  const [product, setProduct] = useState();
  const { productId } = useParams();

  const setProductId = async () => {
    setProduct(await GetElementById(productId));
  };

  useEffect(() => {
    setProductId();
  }, []);

  return (
    <div>
      {!product ? <div>loader</div> : <ProductDetails product={product} />}
    </div>
  );
}
export default ContainerDetails;
