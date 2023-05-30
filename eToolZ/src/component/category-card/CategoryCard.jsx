import React from 'react'

const CategoryCard = ({ category }) => {
    return (
        <div className="bg-red-300 h-32 w-32">
            <h3>Main Category</h3>
            <h4>
                {category}
            </h4>
        </div>
    )
}

export default CategoryCard