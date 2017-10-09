import React, { Component } from 'react';

const CartProduct = ({ productName, price, description, qty }) => {
        return (
            <div>
                <h3>{productName}</h3>
                <h3>Price: ${price}</h3>
                <p>{description}</p>
                <h3> QTY: {qty}</h3>
            </div>
        );

    }


export default CartProduct;