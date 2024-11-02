import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    serviceCategory: string;
    serviceCategorySlug: string;
    serviceSlug: string;
    title: string;
    price: number;
    duration: string;
    partnerName: string;
    partnerSlug: string;
}

type CartState = {
    items: Array<CartItem>;
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    } as CartState,
    reducers: {
        addToCart: (
            state,
            {
                payload: { item },
            }: PayloadAction<{
                item: CartItem;
            }>
        ) => {
            state.items?.push(item);
            localStorage.setItem("items", JSON.stringify(state.items));
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                item => item.title !== action.payload
            );
            localStorage.setItem("items", JSON.stringify(state.items));
        },
        emptyCart: state => {
            localStorage.removeItem("items");
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export const selectCurrentItems = (state: RootState) => state.cart.items;
export default cartSlice.reducer;
