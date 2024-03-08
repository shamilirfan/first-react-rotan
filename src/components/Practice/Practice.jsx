import React from 'react'

const mobile = [
    {
        id: 1,
        name: 'Nokia',
        price: 1100
    },
    {
        id: 2,
        name: 'iPhone',
        price: 22000
    },
    {
        id: 3,
        name: 'Samsung',
        price: 4392
    }
];

function Practice() {
    return (
        <div>
            {mobile.map(value => <h1 key={value.id}>{value.name}</h1>)}
            {mobile.map(value => <h2 key={value.id}>{value.price}</h2>)}
        </div>
    )
}

export default Practice