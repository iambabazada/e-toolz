import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../../../redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@src/component/button/Button'
import { addToBasket } from '../../../../redux/basketSlice'

const ProductDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const product = useSelector(state => state.products.product)

    useEffect(() => {
        dispatch(getProductDetail(id))
        console.log(product);
    }, [id])

    const handleAddToCart = () => {
        dispatch(addToBasket(product))
    }
    return (
        <main>
            <div className="flex gap-24 justify-between">
                <div className="w-1/2 h-[600px]">
                    <img className='w-full h-full object-contain' src={product?.image} alt="" />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                    <h1 className='text-textColor text-2xl font-bold'>{product?.title}</h1>
                    <p className='font-bold'>${product?.price} USD</p>
                    <p>{product?.description}</p>
                    <div className='mt-12 w-full'>

                        <Button
                            variant='primary'
                            size='lg'
                            rounded
                            className='w-full'
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductDetails