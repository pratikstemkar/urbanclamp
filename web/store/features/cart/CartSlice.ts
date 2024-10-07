import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    serviceSlug: string | null;
    title: string | null;
    price: number | null;
    duration: string | null;
    partnerName: string | null;
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
        removeFromCart: (
            state,
            { payload: slug }: PayloadAction<{ slug: string }>
        ) => {
            // state.items = state.items?.filter(item => return item.serviceSlug !== slug);
        },
        emptyCart: state => {
            localStorage.removeItem("items");
            state.items = [];
        },
    },
});

export const { addToCart, emptyCart } = cartSlice.actions;
export const selectCurrentItems = (state: RootState) => state.cart.items;
export default cartSlice.reducer;
