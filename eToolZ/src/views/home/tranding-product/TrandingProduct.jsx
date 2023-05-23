import React, { useEffect } from 'react'
import Title from '@src/component/title/Title'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '@src/redux/productSlice'

// styles 

import { Link } from 'react-router-dom'
import ProductCard from '@src/component/product-card/ProductCard'

const TrandingProduct = () => {
    const dispatch = useDispatch()

    const { products } = useSelector(state => state.products) || []

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <section className='mt-[1000px] mb-1 '>
            <div>
                <Title name="tranding" title="Tranding Products" desc="lorem impus" btn />

            </div>

            <div className="flex flex-wrap justify-between">

                {products?.map((product, index) => (
                    <Link to="#">
                        <ProductCard key={index} product={product} />
                    </Link>
                ))}
            </div>

        </section>
    )
}

export default TrandingProduct