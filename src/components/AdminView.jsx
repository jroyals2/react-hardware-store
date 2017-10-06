import React, { Component } from 'react'
import Product from './Product'
import AdminForm from './AdminForm'

class AdminView extends Component {
  constructor () {
    super()

    this.state = {
      productList: [
        {
          productName: 'Hammer',
          description: 'Itsa hammer',
          price: 12.3
        },
        {
          productName: 'Nail',
          description: 'Itsa nail',
          price: 0.12
        }
      ]
    }
  }
  render () {
    return (
      <div>
        <h1>Admin View</h1>
        <h2>Products</h2>
        <div>
          { this.state.productList.map((product, index) => {
            return (
              <Product key={index} productName={product.productName} price={product.price} description={product.description}/>
            )
          }) }
        </div>
        <h2>Create A New Product</h2>
        <AdminForm />
    </div>
    )
  }
}

export default AdminView