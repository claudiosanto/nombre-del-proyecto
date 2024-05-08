import { createContext, useContext, useState } from "react";

import { db } from "../firebase/config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

// creo un context
export const ProductsContext = createContext();

//funcionalidad para usar contexto mas facil

export const useProductContext = () => useContext(ProductsContext);

//provider provee al resto de nuestra aplicacion
function ProductsProvider({ children }) {
  //proveedor de productos " ProductsProvider"
  //creas un estado global
  const [products, setProducts] = useState([]);
  const [lavarropas, setLavarropas] = useState([]);
  const GetProducts = async () => {
    try {
      const reference = collection(db, "product");
      const Reference2 = collection(db, "lavarropas");
      const productarrays = [];
      const productarrays2 = [];
      const querySnapshot = await getDocs(reference);
      const querySnapshot2 = await getDocs(Reference2);

      querySnapshot.forEach((doc) => {
        productarrays.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setProducts(productarrays);

      querySnapshot2.forEach((doc) => {
        productarrays2.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setLavarropas(productarrays2);
    } catch (error) {
      console.error(error);
    }
  };
  //traer

  const GetElementById = async (id) => {
    try {
      const docReference = doc(db, "product", id);
      const docReference2 = doc(db, "lavarropas", id);
      const docSnap = await getDoc(docReference);
      const docSnap2 = await getDoc(docReference2);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
      } else {
        console.log("No such document!");
      }

      if (docSnap2.exists()) {
        console.log("Document data:", docSnap2.data());
        return docSnap2.data();
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
        lavarropas,
        setLavarropas,
        GetElementById,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;
