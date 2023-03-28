import { View, Text, Image } from 'react-native'
import React from 'react'
import Logo from './../../img/logo.png'
import { Button, P_Button, S_Button } from '../components'

const Splash = ({ navigation }) => {
    return (
        <View className="flex h-screen w-screen bg-whitewash  ">
            <View className="flex h-full">
                <View className="flex h-2/3 bg-whitewash flex justify-center items-center">
                    <Text className="font-bold text-5xl text-primary text-center">Twind</Text>
                    <Image source={Logo} />
                    <Text className="font-bold  text-primary text-center">Solution you can Trust</Text>
                </View>
                <View className="flex h-1/3 p-10 bg-primary rounded-tr-[50px] rounded-bl-[50px]">
                    <Text className="text-3xl font-black">Welcome</Text>
                    <Text className=" text-xl font-thin pb-10">Twind is a financial managemet app that helps
                        chama manage and keep track on all the activies
                        and transaction within the group
                    </Text>
                    <S_Button
                        title="Get Started"
                        onclick={() => navigation.navigate('Login', { name: 'sign up' })}
                    />
                </View>
            </View>
        </View>
    )
}

export default Splash