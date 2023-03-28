
import React, { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { Input, Button } from '../components';
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from './../features/auth/auth.action'
import { unwrapResult } from '@reduxjs/toolkit';
const Auth = ({ navigation, route }) => {
    const createThreeButtonAlert = (err) =>
        Alert.alert('Error in submission form', err, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    const [item, setItem] = React.useState({
        phone_number: "",
        password: "",
        name: "",
        confirm_password: ""
    });
    const [reg, setReg] = useState(false)
    const dispatch = useDispatch()
    const submit = async () => {

        try {
            if (!reg) {
                navigation.navigate('Dashboard', { name: item.name })
            } else {
                let resultAction = await dispatch(registerUser(item))
                const originalPromiseResult = unwrapResult(resultAction)
            }
        } catch (error) {
            createThreeButtonAlert(error)

            console.log("error", error)
        }
        //  : navigation.navigate('Login', { name: 'login' })

    }
    const login = () => {
        navigation.navigate('Dashboard', { name: item.name })
    }
    return (
        <View className="flex-1  h-screen bg-primary ">
            <View className="flex-1  h-full ">

                <View className=" h-1/3 flex items-center justify-center ">
                    <Text className="text-3xl text-500 uppercase">Twind </Text>
                    <Text className="text-500 uppercase ">Twind {route.params.name}</Text>
                </View>
                <View
                    // className=" h-2/3 bg-quaternary rounded-tr-[200px] rounded-bl-[200px] pt-24 pr-10 pl-10"
                    className="h-2/3 bg-quaternary rounded-tr-[100px] rounded-bl-[100px] flex justify-center  p-10"
                >

                    {reg && <Input placeholder="Name"
                        onChangeText={(e) => setItem((prevState) => ({
                            ...prevState,
                            name: e,
                        }))}
                        value={item.name}
                    />}
                    <Input placeholder="Phone umber"
                        onChangeText={(e) => setItem((prevState) => ({
                            ...prevState,
                            phone_number: e,
                        }))}
                        keyboardType='numeric'
                        value={item.phone_number}
                    />
                    <Input placeholder="Password"
                        onChangeText={(e) => setItem((prevState) => ({
                            ...prevState,
                            password: e,
                        }))}
                        secureTextEntry={true}
                        value={item.password}
                    />
                    {reg && <Input placeholder="Confirm password"
                        onChangeText={(e) => setItem((prevState) => ({
                            ...prevState,
                            confirm_password: e,

                        }))}
                        secureTextEntry={true}
                        value={item.confirm_password}
                    />}


                    <Button
                        title={reg ? "Register" : "Login"}
                        onclick={!reg ? () => { login() } : () => submit()}
                    />
                    <View className="flex p-5">

                        {!reg ? <TouchableOpacity activeOpacity={1}
                            onPress={() => setReg(true)}
                        >
                            <Text className="text-right text-primary"> Dont have an account ? Sign Up</Text>
                        </TouchableOpacity>
                            : <TouchableOpacity activeOpacity={1}
                                onPress={() => setReg(false)}
                            >
                                <Text className="text-right text-primary">Already have an account  Login</Text>
                            </TouchableOpacity>}

                    </View>

                </View>
            </View>
        </View>
    )
}

export default Auth