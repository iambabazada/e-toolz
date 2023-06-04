import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import categorySlice from './categorySlice'
import basketSlice from './basketSlice'

export const store = configureStore({
    reducer: {
        products: productSlice,
        categories: categorySlice,
        basket: basketSlice,
    },
})