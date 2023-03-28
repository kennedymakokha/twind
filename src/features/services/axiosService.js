import axios from 'axios';
import { baseURL } from './../../../global.variables';
// import AsyncStorageService from './AsyncStorageService';
console.log(baseURL)
const AxiosUtility = axios.create({
    baseURL: baseURL,
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setAuthToken = async instance => {
    // const { token } = await JSON.parse(await AsyncStorageService.getData('user'));
    if (instance?.defaults) {
        if (token) {
            instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete instance.defaults.headers.common['Authorization'];
        }
    }
};

export default AxiosUtility;
