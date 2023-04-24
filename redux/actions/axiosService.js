import axios from "axios";
import { getData } from "../../src/services/asyncStorage.service";

const axiosService = axios.create({
    // baseURL: "http://localhost:4000/",
    baseURL: "https://213b-102-0-0-246.in.ngrok.io",
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const setAuthToken = async (instance) => {
    let user = await getData("userInfo")
    let userInfo = JSON.parse(user)
    const { token } = userInfo;
    if (token) {
        instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete instance.defaults.headers.common["Authorization"];
    }
};

// singleton instance
export default axiosService;
