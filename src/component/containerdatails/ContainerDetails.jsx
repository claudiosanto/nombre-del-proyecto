
import { useEffect, useState } from 'react'
import './ContainerDetails.css'
import ProductDetails from '../productDetails/ProductDetails'
import { json, useParams } from 'react-router-dom'

function ContainerDetails() {
  const [product, setProduct] = useState()

  const { productId } = useParams();
  console.log(productId)

  const GetElementById = async () => {


    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
      const data = await response.json()
      setProduct(data)


    } catch (error) {
      console.error(error)

    }
  }
  useEffect(() => {
    GetElementById()
  }, [productId])

  return (
    <div>
      {!product ? (<div className="center-body">
        <div className="loader-circle-9">
          Loading
          <span></span>
        </div>
      </div>
      ) : (
        < ProductDetails product={product} />
      )}
    </div>

  )

}
export default ContainerDetails;