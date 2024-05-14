import "./ProductDetails.css";
function ProductDetails({ product }) {
  return (
    <div className="Details">
      <ul>
        <p>precio :{product.price} </p>
        <p> descripcion:{product.descripcion}</p>
        <img className="img" src={product.imag} />
      </ul>
    </div>
  );
}

export default ProductDetails;
