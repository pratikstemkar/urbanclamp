import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/AuthSlice";
import cartReducer from "./features/cart/CartSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authApi } from "./services/auth/authApi";
import { partnerApi } from "./services/partnerApi";
import { categoryApi } from "./services/categoryApi";
import { serviceApi } from "./services/serviceApi";
import { addressApi } from "./services/addressApi";
import { paymentApi } from "./services/paymentApi";
import { bookingApi } from "./services/bookingApi";

const authPersistConfig = {
    key: "root",
    storage: storage,
    // whitelist: ["auth"],
};

const allReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    [partnerApi.reducerPath]: partnerApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
});

const rootReducer = persistReducer(authPersistConfig, allReducer);

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware()
                .concat(authApi.middleware)
                .concat(partnerApi.middleware)
                .concat(categoryApi.middleware)
                .concat(serviceApi.middleware)
                .concat(addressApi.middleware)
                .concat(bookingApi.middleware)
                .concat(paymentApi.middleware),
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
