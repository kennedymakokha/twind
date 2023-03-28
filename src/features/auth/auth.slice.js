import { createAction, createSlice } from '@reduxjs/toolkit'
import { registerUser } from './auth.action'
const registeruser = createAction('registeruser')
const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {

        },
        register: (state) => {

        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending(), state => {
                state.loading = true;
                state.error = false;
                state.success = false;
                state.message = '';
            })
            .addCase(registerUser.fulfilled(), (state, action) => {
                state.loading = false;
                state.success = true;
                state.user = action.payload?.saved;
                state.error = false;
                state.message = '';
            })
            .addCase(registerUser.rejected(), (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload;
                state.user = null;
                state.success = false;
            })
            .addDefaultCase((state, action) => { })
    },

})

// Action creators are generated for each case reducer function
export const { login, register } = authSlice.actions

export default authSlice.reducer