import React, { Component } from 'react'
import Product from './Product'

class ShopView extends Component {
  render () {
    return (
      <div>
        <h2>Products</h2>
        <div>
          { this.props.productList.map((product, index) => {
            return (
              <div key={index}>
                <Product
                  productName={product.productName}
                  price={product.price}
                  description={product.description}
                />
                <button>Add To Cart</button>
              </div>
            )
          }) }
        </div>
      </div>
    )
  }
}

export default ShopView