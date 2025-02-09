import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    serviceCategory: string;
    serviceCategorySlug: string;
    serviceSlug: string;
    description: string;
    title: string;
    price: number;
    duration: string;
    partnerName: string;
    partnerSlug: string;
}

type CartState = {
    items: CartItem[];
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    } as CartState,
    reducers: {
        addToCart: (
            state,
            { payload: { item } }: PayloadAction<{ item: CartItem }>
        ) => {
            state.items = [item]; // Replace all items with the new one
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                i => i.serviceSlug !== action.payload
            );
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        emptyCart: state => {
            state.items = [];
            localStorage.removeItem("cartItems");
        },
    },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export const selectCurrentItems = (state: RootState) => state.cart.items;
export default cartSlice.reducer;
