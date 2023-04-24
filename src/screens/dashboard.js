import { View, Text, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, DashCardItem, ListItem } from '../components'
import BarchartComponent from '../components/barchart'
import Layout from './layout'
import FAB from '../components/fab'
import Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from '../config'
import Register from './register'
import { getData } from '../services/asyncStorage.service'
import { connect } from 'react-redux'
import { Referees } from './../../redux/actions/auth.actions'
import { showToastWithGravity } from './helpers'

// Referees
const Dashboard = (props) => {
    const [show, setShow] = useState(false)
    const [user, setUser] = useState({})

    const getDaa = async () => {
        let a = await getData("userInfo")
        setUser(JSON.parse(a))

    }
    useEffect(() => {
        if (user.name === undefined) {
            setShow(true)
        }
        getDaa()
        props.Referees()
    }, [])


    return (
        <Layout>
            <Register show={false} setShow={setShow} />
            <View className="w-full h-1/3 mt-14 pt-5 pl-2 pr-2  bg-primary ">
                <View className="w-full h-full bg-primary flex" style={{ elevation: 2 }}>
                    <View className="w-full h-10 bg-gold2  rounded-t-[10px] flex  ">
                        <Text className="text-right pr-5 pt-5 text-primary">Platinum</Text>
                    </View>
                    <View className="w-full h-28 bg-gold2 border-b border-secondary flex flex-row justify-between pl-10 pr-10 ">
                        <View className="flex items-center justify-center">
                            <FontAwesome5 name="coins" size={20} color={Colors.primary} />
                            <View className="flex flex-row">
                                <Text className=" font-bold text-3xl text-primary"> 500 points</Text>
                            </View>

                        </View>
                        <View className="flex items-center justify-center">

                            <FontAwesome5 name="users" size={20} color={Colors.primary} />
                            <Text className=" font-bold text-3xl text-primary"> {props.referals.length > 1 ? `${props.referals.length} Referals` : `${props.referals.length} Referal`} </Text>

                        </View>
                    </View>
                    <View className="w-full h-10 bg-gold2  rounded-b-[10px] flex  ">
                        <Text className="text-center text-xl text-primary  uppercase">{`${user?.name}`}</Text>
                    </View>
                </View>
            </View>
            <ScrollView className="bg-primary h-2/3">

                <View className="w-full h-full flex flex-wrap flex-row ">
                    <DashCardItem icon={<Icon name="users" size={30} color={Colors.primary} />} title="Referals" value={props.referals.length} />
                    <DashCardItem icon={<Icon name="cash-register" size={30} color={Colors.primary} />} title="Points" value="5000" />
                    <DashCardItem icon={<Icon name="money-bill-wave" size={30} color={Colors.primary} />} title="Savings" value="Ksh 105005.50" />
                    <DashCardItem icon={<Icon name="money-bill" size={30} color={Colors.primary} />} title="Active Loans" value="2" />

                </View>

            </ScrollView>

        </Layout>
    )
}
const mapStateToProps = (state) => {
    return {

        loading: state.userDetails.loading,
        referals: state.userDetails.referals,
        error: state.userDetails.error,

    };
};

export default connect(mapStateToProps, { Referees })(Dashboard)

