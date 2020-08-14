import React, { useContext } from 'react'
import img from "./products/logo.png"
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { testContext } from './TestProvider'
import {Button} from "./StyledElements"
function Nav() {
    const [,,cart] = useContext(testContext)
    return (
        <header>
            <div className="title">
               <Link to="/"><img src={img} alt="logo" /></Link>
                <h1>GoldenCart</h1>
            </div>
           <div>
           <Link to="/cart">
        <Button transparent primary><FaShoppingCart className="cart-icon"/> {cart.length}</Button>
      </Link>
           </div>
        </header>
    )
}

export default Nav
