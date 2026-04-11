import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface InitialState {
    cart: ProductType[];
    favorite: ProductType[];
    userInfo: any;
}


const initialState: InitialState = {
    cart: [],
    favorite: [],
    userInfo: null
}

export const shofySlice = createSlice({
    name: 'shofy',
    initialState,
    reducers: {
        // Add
        addToCart: (state, action) => {
            const existingProduct = state?.cart?.find((item) => item?.id === action.payload?.id)
            if (existingProduct) {
                existingProduct.quantity! += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },

        // Increase
        increaseQuantity: (state, action) => {
            const existingProduct = state?.cart?.find((item) => item?.id === action.payload)
            if (existingProduct) {
                existingProduct.quantity! += 1;
            }
        },

        // Decrease
        decreaseQuantity: (state, action) => {
            const existingProduct = state?.cart?.find((item) => item?.id === action.payload)
            if (existingProduct) {
                existingProduct.quantity! -= 1;
            }
        },

        // Remove from card
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item?.id !== action.payload);
        },

        // Reset cart
        resetCart: (state) => {
            state.cart = [];
        },

        // Favorite cart
        addToFavorite: (state, action) => {
            const existingProduct = state?.favorite?.find(
                (item) => item?.id === action.payload?.id
            );
            if (existingProduct) {
                state.favorite = state.favorite.filter(
                    (item) => item?.id !== action.payload.id
                );
            } else {
                state.favorite.push(action.payload);
            }
        },

        // Reset Favorite
        resetFavorite: (state) => {
            state.favorite = [];
        },

    },
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, resetCart, addToFavorite, resetFavorite } = shofySlice.actions;
export default shofySlice.reducer;