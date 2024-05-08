import "./ProductDetails.css";
function ProductDetails({ product }) {
  return (
    <div className="Details">
      <ul className="prop">
        <p>precio :{product.price} </p>
        <p> descripcion:{product.descripcion}</p>
        <img src={product.imag} />
      </ul>
    </div>
  );
}

function ProductDetails2({ lavarropas }) {
  return (
    <div className="Details">
      <ul className="prop">
        <p>precio :{lavarropas.price} </p>
        <p> descripcion:{lavarropas.descripcion}</p>
        <img src={lavarropas.imag} />
      </ul>
    </div>
  );
}
export default ProductDetails;
ProductDetails2;
