import { View, Text, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import Layout from './layout'
import { Colors } from '../config'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Avata from './../../img/avatar.png'
import { Input, ListItem_ } from '../components';
import FAB from '../components/fab';
import Modal_window from '../components/modal';
// import { Image } from 'react-native-svg';


const TabComponent = ({ title, value }) => {
    return (
        <View className="w-1/3 h-full items-center justify-center  ">
            <Text className="text-primary font-bold text-xl capitalize">{title}</Text>
            <Text className="text-secondary font-bold text-xl">{value}</Text>
        </View>
    )
}

const Component = ({ transaction = "Edit Profile", item, setItem }) => {
    return (
        <View className="w-full">
            <Input
                placeholder="Name"
                onChangeText={(e) => setItem((prevState) => ({
                    ...prevState,
                    name: e,
                }))}

            />
            <Input placeholder="email" keyboardType="numeric"
                onChangeText={(e) => setItem((prevState) => ({
                    ...prevState,
                    name: e,
                }))}
                value={item?.amount}
            // label="Amount"
            />
            <Input placeholder="phone_number" keyboardType="numeric"
                onChangeText={(e) => setItem((prevState) => ({
                    ...prevState,
                    name: e,
                }))}
                value={item?.amount}
            // label="Amount"
            />
        </View>
    )
}
const Profile = () => {
    const [item, setItem] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <Layout>
            <View className="w-full h-full  flex">
                <View className="bg-primary w-full h-1/3 relative  z-0 flex justify-center items-center">
                    <View className=" flex justify-center items-center">
                        <View className="w-28 h-28 bg-secondary border-2 border-black flex items-center justify-center rounded-full">
                            <Image source={Avata} style={{ height: 90, width: 60, objectFit: 'cover' }} />
                        </View>
                        <Text className="text-xl font-bold text-center pt-2">Kennedy Makokha</Text>
                    </View>
                    <View className="absolute rounded-md h-24 top-56 p-1 inset-x-5 bg-gray-light z-10 botom-10" style={{
                        shadowColor: Colors.primary,
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        // shadowOpacity: 1,
                        shadowRadius: 20,
                        elevation: 5,
                    }}>
                        <View className="w-full h-full  flex-row  ">
                            <TabComponent title="twinds" value="20" />
                            <TabComponent title="contributions" value="2000" />
                            <TabComponent title="Loans" value="0" />
                        </View>

                    </View>
                </View>
                <View className="w-full h-2/3 bg-white flex  -z-10 pt-14">
                    <ListItem_ title="kennedy@gmail.com" icon={<AntDesign name="mail" size={30} color={Colors.primary} />} />
                    <ListItem_ title="+254 722 017 221" icon={<Entypo name="old-phone" size={30} color={Colors.primary} />} />
                    <ListItem_ title="Kennedy@gmail.com" icon={<AntDesign name="mail" size={30} color={Colors.primary} />} />

                </View>

            </View>
            <FAB
                onPress={() => setModalVisible(true)}
                // btn1action={() => setModalVisible(prevState => (!prevState))}
                // btn2action={() => { setModalVisible(prevState => (!prevState)); setTransaction("Loan payment") }}
                title="Edit"

            />

            <Modal_window
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                transaction="Edit Profile"
                item={item}
                component={<Component item={item} setItem={setItem} />}
            />
        </Layout>
    )
}

export default Profile