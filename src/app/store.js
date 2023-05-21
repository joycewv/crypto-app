import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    //add below middleware as apps not working shows"warning: middleware for rtk-query api at reducerpath has not been added to the store"
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(cryptoApi.middleware),
});