import { View, Text } from 'react-native'
import React from 'react'
import Layout from './layout'

const Loandetails = ({ route }) => {
    return (
        <Layout>
            <View className="h-1/6 bg-primary w-full  flex flex-row ">
                <View className="h-full  w-1/3  flex items-center justify-center">
                    <Text className="text-sm font-thin">Total Contributions</Text>
                    <Text className="text-sm font-bold">Ksh 100.00</Text>
                </View>
                <View className="h-full  w-1/3 flex items-center justify-center ">
                    <View style={{ elevation: 10 }} className="w-28 h-28 bg-primary border-2 border-whitewash rounded-full flex items-center justify-center">
                        <Text className="font-thin text-sm"> Twind points </Text>
                        <Text className="text-xl font-bold">50000</Text>
                    </View>
                </View>
                <View className="h-full  w-1/3  flex items-center justify-center">
                    <Text className="text-sm font-thin">Loan Balance</Text>
                    <Text className="text-sm font-bold">Ksh 200.00</Text>
                </View>
            </View>
            <View className="w-full h-12 p-2  justify-center border-b border-secondary ">
                <Text className="text-2xl font-bold text-primary" >Active Loan</Text>
            </View>
            <View className="w-full h-12 p-2  justify-center border-b border-secondary ">
                <View className="h-full  w-1/3  flex  justify-center">
                    <Text className="text-sm font-thin text-primary">Total Contributions</Text>
                    <View className="flex flex-col">
                        <Text className="text-xl font-bold text-primary">Ksh 100</Text><Text>00</Text>
                    </View>
                    {/* <Text className="text-2xl font-bold text-primary">Ksh 100</Text><Text>00</Text> */}
                </View>
                {/* <View className="h-full  w-1/3  flex items-center justify-center">
                    <Text className="text-sm font-thin">Total Contributions</Text>
                    <Text className="text-sm font-bold">Ksh 100.00</Text>
                </View>
                <View className="h-full  w-1/3  flex items-center justify-center">
                </View> */}
            </View>
        </Layout >
    )
}

export default Loandetails