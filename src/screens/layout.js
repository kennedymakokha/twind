import { View, Text } from 'react-native'
import React from 'react'

const Layout = (props) => {
    return (
        <View className="bg-whitewash w-screen  h-screen" style={{ position: "relative", zIndex: 1000 }}>
            {props.children}
        </View>
    )
}

export default Layout