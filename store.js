import { configureStore } from '@reduxjs/toolkit'
import authReducer from './src/features/auth/auth.slice'
export const store = configureStore({
    reducer: {
        auth: authReducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})