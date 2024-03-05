import React from 'react'

function Products(props) {
    return (
        <div>
            <h1>Products name: {props.product.name}</h1>
            <h2>Products price: {props.product.price}</h2>
        </div>
    )
}

export default Products