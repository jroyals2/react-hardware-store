import React, { Component } from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'

class Shop extends Component {
  constructor () {
    super()

    this.state = {
      isAdmin: true,
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
      ],
      cartList: []
    }
  }

  addProductToProductList = (newProduct) => {
    const newProductList = [...this.state.productList]
    newProductList.push(newProduct)
    this.setState({productList: newProductList})
  }

  deleteProductFromProductList = (id) => {
    const newProductList = [...this.state.productList]
    newProductList.splice(id, 1)
    this.setState({productList: newProductList})
  }

  toggleIsAdmin = () => {
    this.setState({isAdmin: !this.state.isAdmin})
  }

  addToCart = (index) => {
      const newCartList = [...this.state.cartList]
      if(newCartList.includes(this.state.productList[index]) === false){
            let product = this.state.productList[index]
            newCartList.push(product)
            newCartList[newCartList.indexOf(product)]['qty'] = 1 
      } else {
          const updateQtyIndex = newCartList.indexOf(this.state.productList[index])
          newCartList[updateQtyIndex].qty += 1
      }
    
    this.setState({cartList: newCartList})

  }
  deleteProductFromCartList = (index) => {
    const newCartList = [...this.state.cartList]
    newCartList.splice(index, 1)
    this.setState({cartList: newCartList})
  }

  render () {
    return (
      <div >
        <button onClick={this.toggleIsAdmin}>Toggle Admin</button>
        <div className="shop">
          <div className="products">
            {this.state.isAdmin
              ? <AdminView
                productList={this.state.productList}
                addProductToProductList={this.addProductToProductList}
                deleteProductFromProductList={this.deleteProductFromProductList}
              /> : <ShopView 
                addToCart={this.addToCart}
                productList={this.state.productList}
              />}
          </div>
          <div className="cart">
            <CartView cartList={this.state.cartList} 
                deleteProductFromCartList={this.deleteProductFromCartList}
          />
          </div>
        </div>
      </div>
    )
  }
}

export default Shop