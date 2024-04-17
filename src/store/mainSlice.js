import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState : {
        loggedIn : false,
        userData : {}
    },
    reducers : {
        update(state,action){
            state.loggedIn = action.payload.loggedIn;
            state.userData = action.payload.userData;
        },
    },
});

export const {update, updateLogin, updateUserData} = mainSlice.actions;
export default mainSlice.reducer;