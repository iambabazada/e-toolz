import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '@src/redux/categorySlice'
import CategoryCard from '@src/component/category-card/CategoryCard'

const MainCategory = () => {
    const dispatch = useDispatch()

    const { categories } = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories())
        console.log(categories);
    }, [dispatch])


    return (
        <main>
            <div>
                {categories?.map((category, index) => {
                    // <CategoryCard category={category} />
                    <h2 className='text-2xl'>{category}</h2>
                })}
            </div>
        </main>
    )
}

export default MainCategory