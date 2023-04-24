import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Loader = () => {
    return (
        <View className="spinner" style={styles.loader_wrapper}>
            <Text className="spinner">Loader</Text>
        </View >
    )
}
const styles = StyleSheet.create({
    body: {
        margin: 0,
        padding: 0,
        height: "100 %",
    },

    loader_wrapper: {
        width: "100 %",
        height: "100 %",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#0b0b0b",
        display: "grid",
        // place - items: center,
    },

    loader: {
        border: "16px solid #e3e3e3",
        borderTop: "16px solid #3498db",
        borderRadius: "50 %",
        width: "140px",
        height: "140px",
        animation: "spin 1s linear infinite",
    },


}
)
export default Loader