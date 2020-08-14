import React, { useState, useEffect } from 'react'
import { mobileData } from './TestFile'

export const testContext = React.createContext()

function TestProvider({ children }) {
  
  const [mobile] = useState([...mobileData])
  const [cart, setCart] = useState(() => {
    const jsonCart = JSON.parse(localStorage.getItem("cart"))
    if(jsonCart){
      return jsonCart
    }else{
      return []
    }
  })



  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])


  const scroll = () => {
    
    if(window.pageYOffset > 0){
      Window.scrollTo({x: 0, y: 0, behavior: "smooth"})
    }else{
      return
    }
  }

  const handleCheck = (value) => {
    console.log(value)
  
  }



  const addToCart = (id) => {
    let added = mobile.find((item) => item.id === id)
    if (cart.includes(added)) {
      return
    } else {
      added.inCart = true
      setCart([...cart, added])
    }
  }
  const removeCart = (index, item) => {
    let removed = cart.filter((item, idx) => idx !== index)
    item.inCart = false
    item.quantity = 1
    setCart(removed)
  }
  //console.log(inCart)

  const clearCart = (cartFalse) => {
    setCart([])
    cartFalse()
  }
  const sumTotal = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
  }
  const increment = (id) => {
    let tempCart = [...cart]

    const productIncart = tempCart.find((item) => item.id === id)
    const index = tempCart.indexOf(productIncart)
    const product = tempCart[index]
    product.quantity += 1
    if (product.quantity <= 9) {
      setCart([...tempCart])
    } else {
      alert('out of stock')
    }
  }
  const decrement = (id) => {
    let tempCart = [...cart]

    const productIncart = tempCart.find((item) => item.id === id)
    const index = tempCart.indexOf(productIncart)
    const product = tempCart[index]
    product.quantity -= 1
    if (product.quantity < 1) {
      alert('cannot go below this quantity')
    } else {
      setCart([...tempCart])
    }
  }

  return (
    <testContext.Provider
      value={[
        mobile,
        addToCart,
        cart,
        clearCart,
        removeCart,
        sumTotal,
        increment,
        decrement,
        handleCheck,
        scroll
      ]}
    >
      {children}
    </testContext.Provider>
  )
}

export default TestProvider
