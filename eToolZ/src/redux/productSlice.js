import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { BASE_URL } from '../api/api'

const initialState = {
    products: [],
    loading: false,
    error: null,
}

export const getProducts = createAsyncThunk('getProducts', async () => {
    const response = await axios.get(`${BASE_URL}/products?offset=4&limit=4`)
    console.log(response.data);
    return response.data

})


const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})


export default ProductSlice.reducer
