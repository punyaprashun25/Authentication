import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import mainReducer from './mainSlice';
const store = configureStore({
    reducer: {
        user  : userReducer,
        main : mainReducer
    }
});

export default store;