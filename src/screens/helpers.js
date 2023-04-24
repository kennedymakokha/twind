
import { Alert, Text, TextInput, ToastAndroid, TouchableOpacity, useColorScheme, View, } from 'react-native';

export const AlertContainer = (err) =>
    Alert.alert('Error in submission form', err, [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

export const showToastWithGravity = (error) => {
    ToastAndroid.show(
        `${error}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,

    );
};