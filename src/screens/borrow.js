import { View, Text, Modal, StyleSheet, Pressable, Dimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Button, Button_sm, Input, ListItem } from '../components'
import Layout from './layout'
import FAB, { List } from '../components/fab'
import { Colors } from '../config'
import Modal_window from '../components/modal'


const v = () => {
    for (let i = 0; i < 10; i++) {
        <ListItem />
    }
}
let image = { uri: 'https://reactjs.org/logo-og.png' }
const V = [
    { state: 'credit', title: 'payment 1', amt: 1010, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 2', amt: 1030, sub: '10.2.2012' },
    { state: 'debit', title: 'payment 3', amt: 1000, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 14', amt: 200, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 6', amt: 1300, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 1', amt: 1010, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 2', amt: 1030, sub: '10.2.2012' },
    { state: 'debit', title: 'payment 3', amt: 1000, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 14', amt: 200, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 6', amt: 1300, sub: '10.2.2012' }, { state: 'credit', title: 'payment 1', amt: 1010, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 2', amt: 1030, sub: '10.2.2012' },
    { state: 'debit', title: 'payment 3', amt: 1000, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 14', amt: 200, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 6', amt: 1300, sub: '10.2.2012' }, { state: 'credit', title: 'payment 1', amt: 1010, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 2', amt: 1030, sub: '10.2.2012' },
    { state: 'debit', title: 'payment 3', amt: 1000, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 14', amt: 200, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 6', amt: 1300, sub: '10.2.2012' }, { state: 'credit', title: 'payment 1', amt: 1010, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 2', amt: 1030, sub: '10.2.2012' },
    { state: 'debit', title: 'payment 3', amt: 1000, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 14', amt: 200, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 6', amt: 1300, sub: '10.2.2012' }, { state: 'credit', title: 'payment 1', amt: 1010, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 2', amt: 1030, sub: '10.2.2012' },
    { state: 'debit', title: 'payment 3', amt: 1000, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 14', amt: 200, sub: '10.2.2012' },
    { state: 'credit', title: 'payment 6', amt: 1300, sub: '10.2.2012' },

]

const Component = ({ transaction, item, setItem }) => {
    return (
        <View className="w-full">
            <Input placeholder={transaction === "Loan application" ? "Reason for loan application" : "Payment for "}
                onChangeText={(e) => setItem((prevState) => ({
                    ...prevState,
                    name: e,
                }))}
                label={transaction === "Loan application" ? "Reason for loan application" : "payment Details"}
                value={item?.amount}
            />
            <Input placeholder="Amount" keyboardType="numeric"
                onChangeText={(e) => setItem((prevState) => ({
                    ...prevState,
                    name: e,
                }))}
                value={item?.amount}
                label="Amount"
            />
        </View>
    )
}
const Borrow = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [transaction, setTransaction] = useState("Loan application")
    const [item, setItem] = useState({ amount: 0 })
    return (
        <Layout>
            <List
                onEnd={() => console.log("Ended")}
                onclick={(e) => navigation.navigate('loansDetails', { data: e })}
                data={V}
            />
            <FAB
                onPress={() => console.log("68")}
                btn1action={() => setModalVisible(prevState => (!prevState))}
                btn2action={() => { setModalVisible(prevState => (!prevState)); setTransaction("Loan payment") }}
                title="New"
                pop={true}
                title2="Pay"
                title1="Add"
            />
            <Modal_window
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                transaction={transaction}
                item={item}
                component={<Component transaction={transaction} item={item} setItem={setItem} />}
            />
        </Layout>
    )
}

export default Borrow

