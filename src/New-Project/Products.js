import React, { useContext, useState } from 'react'
import { testContext } from './TestProvider'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import {Button} from "./StyledElements"

import Modal from './Modal'
import Title from './Title'

function Products() {
  
  const [mobile, addToCart,, , , , , handleCheck] = useContext(testContext)
  const [openModal, setopenModal] = useState(false)
  const [modalData, setmodalData] = useState([])


  
  const modalFile = (idx) => {
    const tempData = mobile.find((item, index) => index === idx)
    setmodalData(tempData)
  }
 

  return (
    <main className="product-list">
      <Title text="Products" />
      <div className="product">
      {mobile.map((each, idx) => (
        <div key={each.id} className="div">
          <img
            src={each.img}
            alt="product"
            onClick={() => {
              setopenModal(true)
              modalFile(idx)
            }}
          />
          <div className="product-item">
          <h1>{each.name}</h1>
          <h2>price: ${each.price}</h2>
          </div>
          <Button main background="rgb(240, 178, 62)" fullwidth noborder onClick={() => addToCart(each.id)}>
            {each.inCart ? 'InCart' : 'Add to Cart'}
          </Button>
          </div>
      ))}
      </div>
      <Modal isOpen={openModal} >
        <button onClick={() => setopenModal(false)} className="close-btn">
          <FaTimes />
        </button>
        <h1>Product Detail</h1>
        <div className="modal-items">
        <div>
          <img src={modalData.img} alt="product" />
        </div>
        <div>
          <h2>{modalData.name}</h2>
          <p>{modalData.description}</p>
         
           
          <Link to="/">
            <Button margined main background="rgb(240, 178, 62)" onClick={() => setopenModal(false)}>
              Back to Products
            </Button>
          </Link>
          <Link
            to={{
              pathname: '/productDetails',
              state: modalData,
            }}
          >
            <Button primary background="rgb(65, 65, 238)" onClick={() => setopenModal(false)}>Full Detail</Button>
          </Link>
        </div>
        </div>
      </Modal>
    </main>
  )
}

export default Products
