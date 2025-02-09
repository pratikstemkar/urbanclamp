import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { persistReducer, PersistState } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth/AuthSlice";
import cartReducer from "./features/cart/CartSlice";
import { authApi } from "./services/auth/authApi";
import { partnerApi } from "./services/partnerApi";
import { categoryApi } from "./services/categoryApi";
import { serviceApi } from "./services/serviceApi";
import { addressApi } from "./services/addressApi";
import { paymentApi } from "./services/paymentApi";
import { bookingApi } from "./services/bookingApi";

// 🔹 Define persist config
const authPersistConfig = {
    key: "root",
    storage,
};

// 🔹 Combine all reducers
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

// 🔹 Persist reducer but ensure it's correctly typed
const rootReducer = persistReducer(authPersistConfig, allReducer);

// 🔹 Define the correct middleware type
const middlewares: Middleware[] = [
    authApi.middleware,
    partnerApi.middleware,
    categoryApi.middleware,
    serviceApi.middleware,
    addressApi.middleware,
    paymentApi.middleware,
    bookingApi.middleware,
];

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(middlewares),
    });
};

// 🔹 Infer correct types for store
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
