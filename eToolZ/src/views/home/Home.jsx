import React from 'react'
import Hero from './hero/Hero'
import TrandingProduct from './tranding-product/TrandingProduct'
import PromotionProduct from './promotion-product/PromotionProduct'

const Home = () => {
    return (
        <div>
            <Hero />
            <TrandingProduct />
            <PromotionProduct />
        </div>
    )
}

export default Home