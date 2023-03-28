// import AsyncStorageService from './AsyncStorageService';
import axios, { setAuthToken } from './axiosService';
// import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
// import auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-community/google-signin';

// const {setData, removeData} = AsyncStorageService;

// register user.
const registerUser = async userData => {
    const response = await axios.post('/register', userData);
    return response.data;
};

// login user
const loginUser = async loginDetails => {
    // console.log(loginDetails);
    // return;
    const response = await axios.post('/login', loginDetails);

    await setData('user', JSON.stringify(response?.data));

    return response.data;
};


// update user
const updateUser = async loginDetails => {
    const response = await axios.put('/update-user', loginDetails);

    // await setData('user', JSON.stringify(response?.data));

    return response;
};

const getUserDetails = async id => {
    await setAuthToken(axios);

    const response = await axios.get(`/user/${id}`);

    return response.data;
};





// activate user:
const activateUser = async ({ id, code }) => {
    const response = await axios.put(`/user/${id}/activate`, { code });
    // console.log(id, code);
    return response?.data;
};

const resendVerificationCode = async id => {
    const response = await axios.post(`/${id}/resend-token`);

    return response.data;
};

// *************Password recovery************
// send verification code to recover account
const recoveryVerification = async data => {
    const response = await axios.post('/recover_account', data);

    return response.data;
};

const confirmRecoveryVerification = async data => {
    const response = await axios.put('/user/re-activate', data);

    return response.data;
};

// send new password

const createNewPassword = async data => {
    const response = await axios.put('/reset-password', data);

    return response.data;
};



// logout user
const logout = async () => {
    await removeData('user');
};

const isExisting = async email => {
    const { data } = await axios.post('/get-user', { email });

    if (data.Exists) {
        return true;
    } else {
        return false;
    }
};

//fetch user roles:
const fetchUserRoles = async () => {
    const { data } = await axios.get('/roles');

    return data?.roles;
};




const saveUserError = async err => {
    setAuthToken(axios);

    const { data } = await axios.post('/error', err);
    return data;
};

const AuthService = {
    loginUser,
    registerUser,
    logout,
    activateUser,
    isExisting,
    updateUser,
    fetchUserRoles,
    resendVerificationCode,
    recoveryVerification,
    confirmRecoveryVerification,
    createNewPassword,
    getUserDetails,

    saveUserError,
};

export default AuthService;
