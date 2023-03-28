import { View, Text } from 'react-native'
import React from 'react'
import { Button, Button_sm, ListItem } from '../components'
import BarchartComponent from '../components/barchart'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Layout from './layout'
import FAB, { List } from '../components/fab'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Trasactions = () => {

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
    return (
        <Layout>
            <List
                rand={true}
                icon={<FontAwesome5 name="money-bill-alt" size={20} color={Colors.whitewash} />}
                onEnd={() => console.log("Ended")}
                data={V}
            />

        </Layout >
    )
}

export default Trasactions