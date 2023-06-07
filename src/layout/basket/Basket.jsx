import React from 'react'
import styles from '@src/styles/layout/basket/basket.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { openBasket } from '../../redux/basketSlice'
import BasketItem from './BasketItem'

const Basket = () => {
    const dispatch = useDispatch()

    const totalCount = useSelector(state => state.basket.totalCount)

    const handleClose = () => {
        dispatch(openBasket(false))
    }

    const handleDeleteCart = (item) => {
        dispatch(deleteFromBasket(item.id))
    }


    const cartItems = useSelector(state => state.basket.basket)



    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.content}>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center'>
                            <h1>Cart</h1>
                            <span
                                className="whitespace-nowrap rounded-full bg-primary px-3 py-0.5 text-sm text-white"
                            >
                                {totalCount}
                            </span>
                        </div>
                        <button onClick={handleClose}>X</button>
                    </div>

                    <div className={styles.cartItems}>
                        {cartItems.map((item, index) => (
                            <BasketItem key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket