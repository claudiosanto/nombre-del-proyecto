import { createContext, useContext, useState } from "react";

import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

// creo un context
export const ProductsContext = createContext();

//funcionalidad para usar contexto mas facil

export const useProductContext = () => useContext(ProductsContext);

//provider provee al resto de nuestra aplicacion
function ProductsProvider({ children }) {
  //proveedor de productos " ProductsProvider"
  //creas un estado global
  const [products, setProducts] = useState([]);

  const GetProducts = async () => {
    try {
      //traer datos de firestore

      const reference = collection(db, "product");
      const productarrays = [];
      const querySnapshot = await getDocs(reference);
      querySnapshot.forEach((doc) => {
        productarrays.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setProducts(productarrays);
    } catch (error) {
      console.error(error);
    }
  };

  const GetElementById = async (Id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${Id}`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {}
  };

  return (
    <ProductsContext.Provider value={{ products, GetProducts, GetElementById }}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;
