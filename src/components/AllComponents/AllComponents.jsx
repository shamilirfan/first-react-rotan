import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Navigation from '../Navigation/Navigation'
import ExpDynaData from '../ExpDynaData/ExpDynaData'
import Products from '../Products/Products'
// import Practice from '../Practice/Practice'


function AllComponents() {
    const products = {
        name: 'Nokia',
        price: 1100
    }
    return (
        <div>
            <Navigation />
            <Home />
            <About />
            <ExpDynaData name='shahin' age='20' />
            <ExpDynaData name='rupa' age='40' />
            <ExpDynaData name='topu' age='30' />
            <Products product={products} />
            {/* <Practice /> */}
        </div>
    )
}

export default AllComponents


