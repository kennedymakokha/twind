import AsyncStorage from '@react-native-async-storage/async-storage';

export const SetData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (err) {
        return err;
    }
};

export const getData = async key => {
    try {
        const value = await AsyncStorage.getItem(key);

        return value;
    } catch (err) {
        return err;
    }
};

export const removeData = async key => {
    try {
        const value = await AsyncStorage.removeItem(key);

        return value;
    } catch (err) {
        return err;
    }
};

const AsyncStorageService = {

};

export default AsyncStorageService;
