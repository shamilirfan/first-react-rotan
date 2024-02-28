import React from 'react'

const explorreStyle = {
    width: '30%',
    padding: '10px',
    border: '2px solid black',
    textAlign: 'center',
    color: 'green',
    backgroundColor: 'gold',
    margin: '8px'
}

function ExpDynaData(props) {
    return (
        <div style={{ color: 'blue' }}>
            <h1>Explore Dynamic Data</h1>
            <p style={explorreStyle}>Name: {props.name}</p>
        </div>
    )
}

export default ExpDynaData