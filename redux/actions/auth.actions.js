import { SetData } from "../../src/services/asyncStorage.service";
import axios, { setAuthToken } from "./axiosService";

export const loginUser = (dat) => async (dispatch) => {
    try {

        dispatch({ type: "LOGIN" });
        const { data } = await axios.post(`/api/login`, dat);
        SetData("userInfo", JSON.stringify(data));
        let payload = data;
        dispatch({ type: "LOGIN_SUCCESSFUL", payload });
        return payload;
    } catch (error) {

        let payload = error.response.data.message;
        dispatch({ type: "LOGIN_FAIL", payload });

        throw error;
    }
};
export const AuthUser = (id) => async (dispatch) => {
    try {

        const { data } = await axios.get(`/api/user/${id}`);
        let payload = data.userObj;
        dispatch({ type: "LOGIN_SUCCESSFUL", payload });
    } catch (error) { }
};
export const Referees = (id) => async (dispatch) => {
    try {
        await setAuthToken(axios);
        const { data } = await axios.get(`/api/referals`);
        let payload = data
        dispatch({ type: "SET_REFERALS", payload });
    } catch (error) {
        console.log(error)
    }
};
export const registerUser = (dat) => async (dispatch) => {
    try {
        await setAuthToken(axios);
        dispatch({ type: "REGISTER_USER" });
        const { data } = await axios.post(`/api/admin/register`, dat);
        let payload = data;
        dispatch({ type: "REGISTER_USER_SUCCESSFUL", payload });
        return payload;
    } catch (error) {
        let payload = "error.response.data.message";
        dispatch({ type: "REGISTER_USER_FAIL", payload });
        throw error;
    }
};

export const clearError = (dat) => async (dispatch) => {
    dispatch({ type: "CLEAR" });
};
