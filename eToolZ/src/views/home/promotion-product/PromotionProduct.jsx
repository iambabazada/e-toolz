import React, { useEffect } from 'react'
import Title from '@src/component/title/Title'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '@src/redux/productSlice'
import ProductCard from '@src/component/product-card/ProductCard'
import { Link } from 'react-router-dom'


const PromotionProduct = () => {
    const dispatch = useDispatch()

    const { products, loading } = useSelector(state => state.products) || []

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <section className='mt-20 '>
            <Title name="offers & promotions" title="Offers & Promotion Products" desc="lorem inpus" btn />

            <div className='flex justify-between flex-wrap'>
                {loading &&
                    <div className="spinner-container">
                        <div className="loading-spinner">
                        </div>
                    </div>
                }
                {products?.map((product, i) => (
                    <Link>
                        <ProductCard key={i} product={product} />
                    </Link>
                ))}

            </div>
        </section>
    )
}

export default PromotionProduct