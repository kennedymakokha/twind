import { View, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import { Button, ListItem } from '../components'
import BarchartComponent from '../components/barchart'
import Layout from './layout'
import FAB from '../components/fab'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from '../config'


const Dashboard = () => {
    const [show, setShow] = useState(true)
    return (
        <Layout>
            <Modal

                animationType="slide"
                transparent={true}
                presentationStyle="overFullScreen"
                visible={show}
            >
                <View className="flex h-screen bg-blue">
                    <View className="h-full p-20">
                        <Text className="text-secondary uppercase mb-5 font-bold text-xl text-center">Not Full Registerd</Text>
                        <View className="h-2/3">

                        </View>
                        <View className="flex w-full flex-row p-2">
                            <View className="flex w-full flex-row gap-x-1">
                                <View className="flex w-full">
                                    <Button onclick={() => setShow(!show)} title="Complete the registration" />
                                </View>

                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
            <View className="w-full h-1/3 mt-14 pt-5 pl-2 pr-2  bg-primary ">
                <View className="w-full h-full bg-primary flex  ">
                    <View className="w-full h-10 bg-gold2  rounded-t-[60px] flex   ">
                        <Text className="text-right pr-5 pt-5 text-primary">Platinum</Text>
                    </View>
                    <View className="w-full h-28 bg-gold2 border-b border-secondary flex flex-row justify-between    pl-10 pr-10 ">
                        <View className="flex items-center justify-center">
                            {/* <Text className="font-bold text-xl">Points </Text> */}
                            <FontAwesome5 name="coins" size={20} color={Colors.primary} />
                            <View className="flex flex-row">

                                <Text className=" font-bold text-3xl text-primary"> 500 points</Text>
                            </View>

                        </View>
                        <View className="flex items-center justify-center">

                            <FontAwesome5 name="users" size={20} color={Colors.primary} />
                            <Text className=" font-bold text-3xl text-primary"> 5 Referals</Text>

                        </View>
                    </View>
                    <View className="w-full h-10 bg-gold2  rounded-b-[60px] flex  ">
                        <Text className="text-center text-xl text-primary  uppercase">Kenedy Makokha</Text>
                    </View>
                </View>
            </View>
            <ScrollView className="bg-primary">

            </ScrollView>

        </Layout>
    )
}

export default Dashboard