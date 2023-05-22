import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    //add below middleware as apps not working shows"warning: middleware for rtk-query api at reducerpath has not been added to the store"
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        cryptoApi.middleware,
        cryptoNewsApi.middleware,
    )
});