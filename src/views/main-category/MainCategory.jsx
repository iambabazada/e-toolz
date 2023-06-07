import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '@src/redux/categorySlice'
import CategoryCard from '@src/component/category-card/CategoryCard'
import styles from '@src/styles/views/categories/categories.module.css'
import { getProducts, getProductsByCategory } from '../../redux/productSlice'
import ProductCard from '../../component/product-card/ProductCard'
import Apply from '../../component/apply/Apply'

const MainCategory = () => {
    const dispatch = useDispatch()

    const { categories } = useSelector(state => state.categories)
    const { products } = useSelector(state => state.products)

    const [categorys, setCategorys] = useState()

    useEffect(() => {
        dispatch(getCategories())
        if (categorys) {
            dispatch(getProductsByCategory(categorys))
        }
        else {
            dispatch(getProducts())
        }
        console.log(categories);
        console.log(categorys);
    }, [categorys])

    const handleCategory = (category) => {
        console.log(category);
        setCategorys(category)
    }

    return (
        <main>
            <div className={styles.categories}>
                {categories?.map((category, index) => (
                    <button onClick={handleCategory.bind(null, category)}>
                        <CategoryCard key={index} category={category} />
                    </button>
                ))}
            </div>

            <div className='flex gap-6 flex-wrap justify-center'>
                {products?.map((product) => (
                    <a href={`/product/${product.id}`}>
                        <ProductCard key={product.id} product={product} />
                    </a>
                ))}
            </div>
            <Apply />
        </main>
    )
}

export default MainCategory