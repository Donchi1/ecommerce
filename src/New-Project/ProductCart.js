import React, { useContext } from 'react'
import { testContext } from './TestProvider'
import PayPayButton from './Paypal'
import { useHistory } from 'react-router-dom'

import Title from './Title'
import { Button } from './StyledElements'

function ProductCart() {
 
  
  const [
    ,
    ,
    cart,
    clearCart,
    removeCart,
    sumTotal,
    increment,
    decrement,
  ] = useContext(testContext)
  const { push } = useHistory()

 
  const cartFalse = () => {
    return cart.map((each) => (each.inCart = false))
  }
  if (cart.length > 0) {
    return (
      <div className="cart-container">
        <Title text="Cart" />

        {cart.map((item, idx) => (
          <div key={item.id} className="incart-items">
            <img src={item.img} alt="product" />
            <h3>{item.name}</h3>
            <h3>price: ${item.price}</h3>
            <h3>category: {item.category}</h3>

            <div className="updown-btn">
              <span onClick={() => increment(item.id)}>+</span>
              <p>{item.quantity}</p>
              <span onClick={() => decrement(item.id)}>-</span>
            </div>
            <div>
              <Button
                main
                background="rgb(240, 178, 62)"
                onClick={() => removeCart(idx, item)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
        <div className="cart-smart">
          {cart.length > 0 && (
            <Button
              background="red"
              primary
              onClick={() => {
                clearCart(cartFalse)
                push('/')
              }}
            >
              Clear cart
            </Button>
          )}
          <h2>
            Total Cost: $<span className="cart-span">{sumTotal()}</span>
          </h2>
           <div style={{textAlign: "center"}}>
             
          <PayPayButton
            total={sumTotal}
            clearCart={clearCart}
            cartFalse={cartFalse}
            history={push}
          />
           </div>
        </div>
      </div>
    )
  } else {
    return (
      <h1
        style={{
          textAlign: 'center',
          color: 'red',
          margin: '2rem',
          fontSize: '3rem',
        }}
      >
        YOUR CART IS CURRNTLY EMPTY
      </h1>
    )
  }
}

export default ProductCart
