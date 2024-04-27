import { useEffect, useState } from 'react'
import './ContainerProducts.css'
import ProductList from '../ProductList/ProductList'
function ContainerProduct() {

  const [products, setProducts] = useState([])

  const GetElementById = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/")
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error(error)
    }


  }

  useEffect(() => {
    GetElementById()
  }, [])
  return (

    <div className='ContainerProduct' >
      {products.length === 0 ? (<div className="lds-facebook"><div></div> <div></div><div></div><div></div></div>) : (
        <ProductList products={products} />
      )}
    </div >



  )



};
export default ContainerProduct;








