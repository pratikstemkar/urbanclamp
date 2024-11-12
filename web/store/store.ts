import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/AuthSlice";
import cartReducer from "./features/cart/CartSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
    key: "root",
    storage: storage,
    // whitelist: ["auth"],
};

const allReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
});

const rootReducer = persistReducer(authPersistConfig, allReducer);

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
