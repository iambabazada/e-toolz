import React from 'react'
import Hero from './hero/Hero'
import TrandingProduct from './tranding-product/TrandingProduct'
import PromotionProduct from './promotion-product/PromotionProduct'
import FeatureSection from './feature-section/FeatureSection'
import Apply from '@src/component/apply/Apply'

const Home = () => {
    return (
        <div>
            <Hero />
            <TrandingProduct />
            <PromotionProduct />
            <FeatureSection />
            <Apply />
        </div>
    )
}

export default Home