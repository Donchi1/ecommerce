import React, { useContext, useState, useEffect, useRef } from 'react'
import { testContext } from './TestProvider'
import { Link, useLocation } from 'react-router-dom'
import Title from './Title'
import {Button} from "./StyledElements"

function ProductDetails() {
  const [, addToCart,,,,,,,scroll] = useContext(testContext)

  const { state } = useLocation()
  const [subImage, setsubImage] = useState(state.img)

  const scrollref = useRef(scroll())

  useEffect(() => scrollref, [])

  const handleImg = (e) => {
    setsubImage(e.target.src)
  }

  return (
    <section  >
      <Title text="Product info" />
      <div className="details">
      <div className="img">
        <img src={subImage} alt="product" />
      </div>
      <div>
      <h2>{state.name}</h2>
      <h3>category: {state.category}</h3>
      <p>{state.description}</p>
      <h4>Price: ${state.price}</h4>
         <div className="span-img">

      <img src={state.subImg[0]} alt="productPix" onMouseOver={handleImg} />
      <img src={state.subImg[1]} alt="productPix" onMouseOver={handleImg} />
      <img src={state.subImg[2]} alt="productPix" onMouseOver={handleImg} />
      <img src={state.subImg[3]} alt="productPix" onMouseOver={handleImg} />
         </div>

      <Link to="/">
        <Button margined main background="rgb(240, 178, 62)">Back to Products</Button>
      </Link>
      <Button onClick={() => addToCart(state.id)} primary background="rgb(65, 65, 238)">
        {state.inCart ? 'InCart' : 'Add to Cart'}
      </Button>
      </div>
      </div>
      <h1 className="specify-title">Full specification</h1>
      <div className="specify">
      <div>
        <h4>Os:</h4>
        <h4>Ram:</h4>
        <h4>weight:</h4>
        <h4>Dimentions:</h4>
        <h4>Batteries:</h4>
        <h4>Model Number:</h4>
        <h4>Wireless :</h4>
        <h4>Connectivity:</h4>
        <h4>GPS</h4>
        <h4>SpecialFeature:</h4>
        <h4>Display:</h4>
        <h4>Resolution:</h4>
        <h4>Color:</h4>
        <h4>Talk Time:</h4>
      </div>
        <div className="last-spec">
  <h5>{state.Details.Os}</h5>
  <h5>{state.Details.Ram}</h5>
  <h5>{state.Details.Weight}</h5>
  <h5>{state.Details.Dimensions}</h5>
  <h5>{state.Details.Batteries}</h5>
  <h5>{state.Details.Modelnumber}</h5>
  <h5>{state.Details.Wireless}</h5>
  <h5>{state.Details.Connectivity}</h5>
  <h5>{state.Details.GPS}</h5>
  <h5>{state.Details.Specialfeatures}</h5>
  <h5>{state.Details.Display}</h5>
  <h5>{state.Details.Resolution}</h5>
  <h5>{state.Details.Color}</h5>
  <h5>{state.Details.Talktime}</h5>
  </div>
      </div>
    </section>
  )
}

export default ProductDetails
