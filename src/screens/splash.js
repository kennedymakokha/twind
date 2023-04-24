import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Logo from './../../img/logo.png'
import { S_Button } from '../components'
import { getData } from '../services/asyncStorage.service'

const Splash = ({ navigation }) => {
    const [logged, setLogged] = useState({
        name: '',
        state: false
    })
    const getStarted = async () => {
        let user = await getData("userInfo")
        let userInfo = JSON.parse(user)
        if (user) {
            navigation.navigate('Dashboard', { name: userInfo.name })
        } else {
            navigation.navigate('Login', { name: 'sign up' })
        }
    }


    useEffect(() => {
        const getUser = async () => {
            let user = await getData("userInfo")
            let userInfo = JSON.parse(user)
            if (user) {
                setLogged({ name: userInfo.name, state: true })
            }
        }
        getUser()

    }, [])
    return (
        <View className="flex h-screen w-screen bg-whitewash  ">
            <View className="flex h-full">
                <View className="flex h-2/3 bg-whitewash flex justify-center items-center">
                    <Text className="font-bold text-5xl text-primary text-center">Twind</Text>
                    <Image source={Logo} />
                    <Text className="font-bold  text-primary text-center">Solution you can Trust</Text>
                </View>
                <View className="flex h-1/3 p-10 bg-primary rounded-t-[20px] ">
                    <Text className="text-3xl font-black">{logged.state ? `Hi ${logged.name}` : "Wlocome"}</Text>
                    <Text className=" text-xl font-thin pb-10">
                        {!logged.state ? "Twind is a financial managemet app that helps chama manage and keep track on all the activies and transaction within the group"
                            : " How are you liking Twind so far kindly refer to other people and earn twind points"}
                    </Text>
                    <S_Button
                        title={!logged.state ? "Get Started" : "Continue "}
                        onclick={() => getStarted()}
                    />
                </View>
            </View>
        </View>
    )
}

export default Splash