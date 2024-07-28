import { configureStore } from "@reduxjs/toolkit";
import { catalogsReducer } from "./catalog/slice";

export const store = configureStore({
    reducer: {
        catalogs: catalogsReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});
