import React from 'react'
import Hero from './hero/Hero'
import TrandingProduct from './tranding-product/TrandingProduct'
import PromotionProduct from './promotion-product/PromotionProduct'
import FeatureSection from './feature-section/FeatureSection'
import Apply from '@src/component/apply/Apply'

const Home = () => {
    return (
        <main>
            <Hero />
            <TrandingProduct />
            <PromotionProduct />
            <FeatureSection />
            <Apply />
        </main>
    )
}

export default Home