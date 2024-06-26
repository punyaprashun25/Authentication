import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState : [],
    reducers : {
        createUser(state, action){
            state.push(action.payload);
        },
    },
});

export const {createUser} = userSlice.actions;
export default userSlice.reducer;