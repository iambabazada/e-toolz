import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../api/api";

const initialState = {
    categories: [],
    loading: false,
    error: null,
}

export const getCategories = createAsyncThunk('getCategories', async () => {
    const response = await axios.get(`${BASE_URL}/products/categories`)
    console.log(response.data);
    return response.data
})

const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builer) => {
        builer.addCase(getCategories.pending, (state, action) => {
            state.loading = true
        })
        builer.addCase(getCategories.fulfilled, (state, action) => {
            state.loading = false
            state.categories = action.payload
        })
        builer.addCase(getCategories.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})


export default CategorySlice.reducer
