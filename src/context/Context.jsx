import { createContext, useContext, useState } from "react";

import { db } from "../firebase/config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

// creo un context
export const ProductsContext = createContext();

//funcionalidad para usar contexto mas facil

export const useProductContext = () => useContext(ProductsContext);

//provider provee al resto de nuestra aplicacion
function ProductsProvider({ children }) {
  //proveedor de productos " ProductsProvider"
  //creas un estado global
  const [products, setProducts] = useState([]);

  const GetProducts = async (category = null) => {
    try {
      const reference = collection(db, "product");
      //filtar por categoria
      const q = query(
        collection(db, "product"),
        where("category", "==", category)
      );
      const productarrays = [];
      //ejecuta la const de q "filtro"
      const querySnapshot = await getDocs(q);

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
  //traer

  const GetElementById = async (id) => {
    try {
      const docReference = doc(db, "product", id);

      const docSnap = await getDoc(docReference);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        GetProducts,

        GetElementById,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;
