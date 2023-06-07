import React from 'react'

import styles from '@src/styles/views/home/components/tranding-products/TrandingProducts.module.css'

const ProductCard = ({ product }) => {
    const { image, name, title, desc, price } = product
    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={image} className={styles.image} alt={name} />
            </div>
            <div className="content">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm">{desc}</p>
                <p className="text-sm">${price}</p>
            </div>
        </div>
    )
}

export default ProductCard