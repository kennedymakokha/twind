import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'https://1f67-102-0-0-246.in.ngrok.io'

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({
        name,
        phone_number,
        password,
        confirm_password
    }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                `${backendURL}/api/register`,
                {
                    name,
                    phone_number,
                    password,
                    confirm_password
                },
                config
            )
        } catch (error) {

            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                console.log("firstee", error.response && error.response.data.message)

                throw rejectWithValue(error.response.data.message)
            } else {
                console.log("firste", error)
                throw rejectWithValue(error.message)
            }
        }
    }
)
