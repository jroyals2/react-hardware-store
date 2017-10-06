import React, { Component } from 'react'
import Product from './Product'

class CartView extends Component {
  render () {
    return (
      <div>
        <h1>Cart</h1>
        <div>
          { this.props.cartList.map((product, index) => {
            return (
              <div key={index}>
                <Product
                  productName={product.productName}
                  price={product.price}
                  description={product.description}
                />
                <button onClick={() => this.props.deleteProductFromCartList(index)}>Delete</button>
              </div>
            )
          }) }
        </div>
      </div>
    )
  }
}

export default CartView