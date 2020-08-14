import React from 'react'
import TestProvider from './TestProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import Products from './Products'
import ProductCart from './ProductCart'
import Nav from './Nav'
import "./products/productcss/Nav.css"
import "./products/productcss/global.css"
import "./products/productcss/global.css"
import "./products/productcss/product.css"
import "./products/productcss/cart.css"
import "./products/productcss/details.css"
import Empty from './Empty'
function TestApp() {
  return (
    <TestProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={ProductCart} />
          <Route exact path="/productDetails" component={ProductDetails} />
          <Route exact component={Empty} />
        </Switch>
      </Router>
    </TestProvider>
  )
}

export default TestApp
