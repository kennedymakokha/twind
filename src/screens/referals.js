import { View, Text } from 'react-native'
import React from 'react'
import { List, List_ } from '../components/fab'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../config'

const Referals = () => {
    const V = [
        { title: 'kennedy makokha', },
        { title: 'Geoffrey Mureithi' },
        { title: 'Maina Wambua', },
        { title: 'kennedy makokha4', },
        { title: 'Joyce Wambua', },
        { title: 'kennedy makokha', },
        { title: 'Geoffrey Mureithi' },
        { title: 'Maina Wambua', },
        { title: 'kennedy makokha4', },
        { title: 'Joyce Wambua', },
        { title: 'kennedy makokha', },
        { title: 'Geoffrey Mureithi' },
        { title: 'Maina Wambua', },
        { title: 'kennedy makokha4', },
        { title: 'Joyce Wambua', },
        { title: 'kennedy makokha', },
        { title: 'Geoffrey Mureithi' },
        { title: 'Maina Wambua', },
        { title: 'kennedy makokha4', },
        { title: 'Joyce Wambua', },
        { title: 'kennedy makokha', },
        { title: 'Geoffrey Mureithi' },
        { title: 'Maina Wambua', },
        { title: 'kennedy makokha4', },
        { title: 'Joyce Wambua', },
        { title: 'kennedy makokha', },
        { title: 'Geoffrey Mureithi' },
        { title: 'Maina Wambua', },
        { title: 'kennedy makokha4', },
        { title: 'Joyce Wambua', },

    ]
    return (
        <View>
            <List
                rand={true}
                icon={<FontAwesome5 name="user" size={20} color="white" />}
                onEnd={() => console.log("Ended")}
                data={V}
            />
        </View>
    )
}

export default Referals