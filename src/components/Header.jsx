import React, { Component } from 'react';
import EditSaleItem from './EditSaleItem.jsx'

class Header extends Component {
    constructor() {
        super()

        this.state = {
            itemCurrentlyOnSale: "A Hammer!",
            editSaleItem: false,
        
        }
    }

    toggleEditSaleItem = () => {
        this.setState({editSaleItem: !this.state.editSaleItem})
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            itemCurrentlyOnSale: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Hardware Store</h1>
                <p>Currently On Sale: {this.state.itemCurrentlyOnSale}</p>
                <EditSaleItem
                 toggleEditSaleItem={this.toggleEditSaleItem}
                 handleItemCurrentlyOnSaleChange={this.handleItemCurrentlyOnSaleChange}
                 itemCurrentlyOnSale={this.state.itemCurrentlyOnSale}
                 editSaleItem={this.state.editSaleItem}
                 />
            </div>
        );
    }
}

export default Header;