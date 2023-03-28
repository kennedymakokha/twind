import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Button_sm, ListItem } from './index'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const FAB = (props) => {

    const [show, setShow] = useState(false)
    return (
        <View style={styles.container} className="gap-y-2 flex flex-col">
            {props.title2 && < Pressable
                style={{ display: !show ? "none" : "flex" }}
                className=" h-10 w-10 rounded-full bg-secondary text-center items-center justify-center"
                onPress={props.btn2action}>
                <Text className="text-whitewash font-bold">{props.title2}</Text>
            </Pressable>}
            <Pressable className=" h-12 w-12 rounded-full bg-primary text-center items-center justify-center"
                style={{ display: !show ? "none" : "flex" }}
                onPress={props.btn1action}>
                <Text className="text-whitewash font-bold">{props.title1}</Text>
            </Pressable>
            <Pressable className=" h-14 w-14 rounded-full bg-primary text-center items-center justify-center"
                onPress={() => { props.pop ? setShow(preveState => (!preveState)) : props.onPress() }}>
                <Text className="text-whitewash font-bold">{props.title}</Text>
            </Pressable>
        </View >

    );
};

export default FAB;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",

        alignItems: "center",
        borderRadius: 10,
        position: "absolute",
        bottom: 70,
        right: 40,

        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
});

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize, }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom;
};
var rand = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')';



export const List = ({ end, onEnd, data, icon, onclick }) => (

    <ScrollView
        className="w-full  p-2 mt-10 mb-10"
        onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
                onEnd();
            }
        }}
        scrollEventThrottle={0.9 * Dimensions.get("window").height}
    >
        {data.map((trans, i) => (
            <ListItem icon={icon} onclick={e => onclick({ data: e })} data={trans} key={i} />
        ))}

    </ScrollView>
);
export const List_ = ({ end, onEnd, data, icon, color }) => (

    <ScrollView
        className="w-full  mt-10 mb-10 "
        onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
                onEnd();
            }
        }}
        scrollEventThrottle={0.9 * Dimensions.get("window").height}
    >
        {data.map((trans, i) => (
            <View className="h-14 w-full flex flex-row text-secondary border-b border-secondary mr-6 ml-6"

            >
                <View className="h-full w-1/6 flex flex text-center items-center justify-center">
                    <View

                        className="rounded-full   flex text-center items-center justify-center w-10 h-10">
                        {icon}
                    </View>
                </View >
                <View className="h-full w-4/6 flex  flex text-left  justify-center">
                    <Text
                        style={{ color: color ? color : "#363636" }}
                        className=" text-xl "> {trans.title}</Text>
                </View >

            </View >
            // <ListItem_ data={trans} key={i} />
        ))}

    </ScrollView>
);
