

// like local useState()

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null, // No user logged in by default
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInSuccess: (state, action) => {
            state.currentUser = action.payload; // Set the current user to the payload
        },
        userOut: (state) => {
            state.currentUser = null; // Reset the current user on sign out
        },
    },
});

export const { signInSuccess, userOut } = userSlice.actions;

export default userSlice.reducer;