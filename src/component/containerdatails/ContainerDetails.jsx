import { useEffect, useState } from "react";
import "./ContainerDetails.css";
import ProductDetails from "../productDetails/ProductDetails";
import { json, useParams } from "react-router-dom";
import { useProductContext } from "../../context/Context";

function ContainerDetails() {
  d;
  const { GetElementById } = useProductContext();
  const [product, setProduct] = useState();
  const { productId } = useParams();
  const [lavarropas, setLavarropas] = useState();

  const setProductId = async () => {
    setProduct(await GetElementById(productId));
  };
  const setProductId2 = async () => {
    setLavarropas(await GetElementById(productId));
  };

  useEffect(() => {
    setProductId();
  }, []);

  useEffect(() => {
    setProductId2();
  }, []);

  return (
    <div>
      {!product ? <div>loader</div> : <ProductDetails product={product} />}
    </div>
  );
}
export default ContainerDetails;
