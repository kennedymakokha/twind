import { View, Text, TextInput, TouchableOpacity, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../config'
import CheckBox from '@react-native-community/checkbox'

export const Input = (props) => {
    return (
        <View>
            {props.label && <Text className="mb-2 uppercase text-primary">{props.label}</Text>}
            <View className="bg-secondary rounded-[14px] w-full h-14 justify-center pl-5 pr-5 mb-5">

                <TextInput className=" w-full h-full "
                    placeholder={props.placeholder}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    secureTextEntry={props.secureTextEntry}
                    keyboardType={props.keyboardType}
                />
            </View>
        </View>

    )
}
export const Checkbox = (props) => {
    const { toggleCheckBox, setToggleCheckBox, title1, title } = props

    return (
        <View>
            {props.label && <Text className="mb-2 uppercase text-primary">{props.label}</Text>}
            <View className="bg-secondary rounded-[14px] w-full h-14 justify-center pl-5 pr-5 mb-5">
                <View className="flex flex-row  items-center gap-x-10">
                    <View className="flex flex-row  items-center">
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        /><Text>{title}</Text>
                    </View>
                    {title1 && <View className="flex flex-row  items-center">
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        /><Text>{title1}</Text>
                    </View>}
                </View>

            </View>
        </View>

    )
}
export const Radiobox = (props) => {
    const { toggleCheckBox, setToggleCheckBox, title1, data, onchange } = props
    const [userOption, setUserOption] = useState(null);

    return (
        <View>
            {props.label && <Text className="mb-2 uppercase text-primary">{props.label}</Text>}
            <View className="bg-secondary rounded-[14px] w-full h-14 justify-center pl-5 pr-5 mb-5">
                <View className="flex flex-row">
                    {data.map((item) =>
                    (
                        /*Change the 'onPress' handler here */
                        <Pressable onPress={() => { setUserOption(item.value); onchange(item.value) }} className="flex flex-row gap-x-1 items-center">
                            <View className="h-5 w-5 flex justify-center items-center border border-whitewash ">
                                {item.value === userOption && <Icon name="check" size={18} />}
                            </View>
                            <View className="pr-2">
                                <Text> {item.value}</Text>
                            </View>
                        </Pressable>
                    )
                    )}

                </View>
            </View>
        </View >

    )
}
export const Select = (props) => {
    return (
        <View className="bg-secondary rounded-[14px] w-full h-14 justify-center pl-5 pr-5 mb-5">
            <TextInput className=" w-full h-full "
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                keyboardType={props.keyboardType}
            />
        </View>
    )
}

export const Button = (props) => {
    return (
        <View className="h-14">
            <TouchableOpacity activeOpacity={1}
                onPress={props.onclick}
                // style={[exstyle.button, { padding: 0, }]}
                className={props.style ? props.style : "text-center flex justify-center align-center text-center text-2xl items-center text-quaternary bg-primary h-full rounded-[14px] drop-shadow-3xl "}
            >
                <Text>{props.title}</Text>
                {/* <Text style={exstyle.buttonText}>{route.params.name}</Text> */}
            </TouchableOpacity>
        </View >
    )
}
export const Button_sm = (props) => {
    return (
        <TouchableOpacity activeOpacity={1} className="text-quaternary bg-primary pt-2 pb-2 pl-5 pr-5 h-10 rounded-[14px] shadow-xl">
            <Text>
                Borrow loan
            </Text>
        </TouchableOpacity>
    )
}
export const S_Button = (props) => {
    return (
        <View className="h-14">
            <TouchableOpacity activeOpacity={1}
                onPress={props.onclick}
                // style={[exstyle.button, { padding: 0, }]}
                className="text-center flex justify-center align-center text-center text-2xl items-center text-quaternary bg-secondary h-full rounded-[14px] drop-shadow-3xl "
            >
                <Text>{props.title}</Text>
                {/* <Text style={exstyle.buttonText}>{route.params.name}</Text> */}
            </TouchableOpacity>
        </View >
    )
}
export const ListItem = (props) => {
    return (
        <Pressable className="h-14 w-full flex flex-row text-secondary"
            onPress={props.onclick}
        >
            <View className="h-full w-1/6 flex flex text-center items-center justify-center">
                <View
                    style={{ backgroundColor: !props.rand ? "#002244" : 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')' }}
                    className="rounded-full  bg-primary flex text-center items-center justify-center w-10 h-10">
                    {props.icon ? props.icon : <Text >T</Text>}
                </View>
            </View >
            <View className="h-full w-4/6 flex  flex text-left  justify-center">
                <Text

                    className="text-primary text-xl capitalize"> {props?.data?.title}</Text>
                <Text

                    className="text-secondary pl-1">{props?.data?.sub}</Text>
            </View >
            <View className="h-full w-1/6  flex flex text-center items-center justify-center">
                <Text
                    style={{ color: !props.data?.state ? "black" : props?.data?.state === "credit" ? "green" : 'red' }}
                    className="text-primary"> {props?.data?.state === "debit" && "-"}{props?.data?.amt}</Text>
            </View >
        </Pressable >

    )
}

export const DashCardItem = (props) => {
    return (
        <View className="  w-1/2   p-2">
            <View style={{ elevation: 2 }} className=" h-28  bg-whitewash   rounded-[10px] flex justify-center items-center">
                {props.icon}
                <Text className="font-bold text-primary text-xl">{props.value}</Text>
                <Text className="font-semibold text-secondary text-xl">{props.title}</Text>
            </View>
        </View>

    )
}
export const ListItem_ = (props) => {
    return (
        <View className="h-14 w-full flex flex-row text-secondary"

        >
            <View className="h-full w-1/6 flex flex text-center items-center justify-center">
                <View

                    className="rounded-full   flex text-center items-center justify-center w-10 h-10">
                    {props.icon}
                </View>
            </View >
            <View className="h-full w-4/6 flex  flex text-left  justify-center">
                <Text
                    style={{ color: props.color ? props.color : "#363636" }}
                    className=" text-xl "> {props?.title}</Text>
            </View >

        </View >

    )
}

const styles = StyleSheet.create({
    option: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    unselected: {
        backgroundColor: 'red',
        margin: 5,
    },
    selected: {
        backgroundColor: 'blue',
        margin: 6,
        padding: 10,
        borderRadius: 10,
    },
});
