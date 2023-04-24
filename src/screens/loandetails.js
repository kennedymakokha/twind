import { View, Text } from 'react-native'
import React from 'react'
import Layout from './layout'
import { isNumeric } from '../helperfunctions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../config'
import { Button } from '../components'



const TabComponent = (props) => {
    return (
        <View className="h-full  w-1/3  flex  gap-y-3">
            <Text className="text-primary">{props.title}</Text>
            <View className="flex flex-row">
                <Text className="text-xl font-bold text-primary">{isNumeric(props.value) && "Ksh"} {props.value}.</Text>{isNumeric(props.value) && <Text className="font-bold sups  text-primary">00</Text>}
            </View>
        </View>
    )
}
const TopTabComponent = (props) => {
    return (
        <View className="h-full  w-1/3 gap-y-3  flex items-center justify-center">
            <Text className="text-sm font-thin">{props.title}</Text>
            <View className="flex flex-row">
                <Text className="text-xl font-bold text-whitewash">{isNumeric(props.value) && "Ksh"} {props.value}.</Text>{isNumeric(props.value) && <Text className="font-bold sups  text-whitewash">00</Text>}
            </View>
        </View>
    )
}
const Loandetails = ({ route }) => {
    return (
        <Layout>
            <View className="h-1/6 bg-primary w-full  flex flex-row ">

                <TopTabComponent title="Total Contributions" value="5000" />
                <View className="h-full  w-1/3 flex items-center justify-center ">
                    <View className="w-28 h-28 bg-primary border-2 border-whitewash rounded-full flex items-center justify-center">
                        <Text className="font-thin text-sm"> Twind points </Text>
                        <Text className="text-xl font-bold">50000</Text>
                    </View>
                </View>
                <TopTabComponent title="Loan Balance" value={200} />

            </View>
            <View className="w-full h-12 p-2  justify-center border-b border-secondary ">
                <Text className="text-2xl font-bold text-primary" >Active Loan</Text>
            </View>
            <View className="w-full h-20  p-2 border-b border-secondary  flex flex-row">
                <TabComponent title="Loan Amount" value={2000} />
                <TabComponent title="Amount to be paid " value={2200} />
                <TabComponent title="Payment Due Date" value="15th Jan 2026" />
            </View>
            <View className="w-full h-40  p-2 border-b border-secondary  flex justify-center items-center">
                <Icon name="clock-time-eleven-outline" size={70} color={Colors.secondary} className="font-thin" />
                <Text className="text-3xl text-secondary font-bold">Repay within 9 Days</Text>
                <Text className="text-xl text-secondary font-thin">Repay within 9 Days</Text>

                <View className="flex justify-between flex-row">
                    {/* <Text className="text-3xl text-secondary font-bold">Repay within 9 Days</Text> */}
                    {/* <Text className="text-xl text-secondary font-thin">Repay within 9 Days</Text> */}
                    <Button
                        title="Contact Support "
                        onclick={() => console.log("first")}
                    />
                    <Button
                        title="Pay Now"
                        onclick={() => console.log("first")}
                    />
                </View>
            </View>
        </Layout >
    )
}

export default Loandetails