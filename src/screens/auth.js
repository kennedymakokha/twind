
import React, { useEffect, useState } from 'react'
import { Alert, Text, TouchableOpacity, View, } from 'react-native';
import { Input, Button } from '../components';
import { connect } from 'react-redux'
import { loginUser } from './../../redux/actions/auth.actions'
import { showToastWithGravity } from './helpers';
import { getData } from '../services/asyncStorage.service';
const Auth = ({ navigation, route, loginUser, error }) => {
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
        phone_number: "0716017316",
        password: "Kee5145j$",
        name: "",
        confirm_password: ""
    });
    const [reg, setReg] = useState(false)

    const submit = async () => {
        try {
            await props.loginUser(item)
            showToastWithGravity("User Reistration Complete wait for activations")
            setReg(false)
        } catch (error) {
            showToastWithGravity(error)
        }
    }
    const login = async () => {
        try {

            await loginUser(item)
            showToastWithGravity("Login Successful")
            navigation.navigate('Dashboard', { name: item.name })
        } catch (error) {
            console.log(error)
            showToastWithGravity(error)
        }

    }
    const geyUser = async () => {
        let user = await getData("userInfo")
        console.log(user)
        return user
    }
    useEffect(() => {
        const getUser = async () => {
            let user = await getData("userInfo")
            let userInfo = JSON.parse(user)
            if (user) {
                navigation.navigate('Dashboard', { name: userInfo.name })
            }
        }
        getUser()

    }, [])

    return (
        <View className="flex-1  h-screen bg-primary ">
            <View className="flex-1  h-full ">

                <View className=" h-1/3 flex items-center justify-center ">
                    <Text className="text-3xl text-500 uppercase">Twind </Text>
                    <Text className="text-500 uppercase ">Twind {route.params.name}</Text>
                </View>
                {/* <Loader /> */}
                <View
                    // className=" h-2/3 bg-quaternary rounded-tr-[200px] rounded-bl-[200px] pt-24 pr-10 pl-10"
                    className="h-2/3 bg-quaternary  rounded-t-[20px] flex justify-center  p-10"
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
const mapStateToProps = (state) => {
    return {

        loading: state.userDetails.loading,

        error: state.userDetails.error,

    };
};

export default connect(mapStateToProps, { loginUser })(Auth)

// export default 