import React from 'react'
import categoryImg from '@src/assets/images/category.jpg'

const CategoryCard = ({ category }) => {
    return (
        <div className="shadow-lg w-[350px]">
            <div className="p-5">
                <h3 className='text-primary'>Main Category</h3>
                <h4 className='text-2xl'>
                    {category}
                </h4>
            </div>
            <div className="w-full h-24">
                <img className='w-full h-full object-cover' src={categoryImg} alt="" />
            </div>

        </div>
    )
}

export default CategoryCard