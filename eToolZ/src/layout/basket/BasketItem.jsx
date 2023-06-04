import React from 'react'
import { useDispatch } from 'react-redux'
import styles from '@src/styles/layout/basket/basket.module.css'
import { decrementCart, deleteFromBasket, incrementCart } from '../../redux/basketSlice'


const BasketItem = ({ item }) => {

    const dispatch = useDispatch()

    const handleDeleteCart = () => {
        dispatch(deleteFromBasket(item.id))
    }

    const handleDecrement = () => {
        dispatch(decrementCart(item.id))
    }

    const handleIncrement = () => {
        dispatch(incrementCart(item.id))
    }


    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemImg}>
                <img src={item.image} alt="" />
            </div>
            <div className={styles.cartItemInfo}>
                <h1 className='font-bold'>{item.title}</h1>
                <p>${item.price} USD</p>
                <div className='w-28'>
                    <label htmlFor="Quantity" class="sr-only"> Quantity </label>

                    <div class="flex items-center border border-gray-200 rounded">
                        <button
                            type="button"
                            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                            onClick={handleDecrement}
                        >
                            &minus;
                        </button>

                        <input
                            type="number"
                            id="Quantity"
                            value={item.quantity}
                            className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                        />

                        <button
                            type="button"
                            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <button onClick={handleDeleteCart}>
                X
            </button>
        </div>
    )
}

export default BasketItem