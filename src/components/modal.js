import { Modal, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { Colors } from '../config';
import { Button, Input } from '.';



const Modal_window = (props) => {
    const { modalVisible, setModalVisible, transaction, item } = props
    return (
        <Modal
            animationType="slide"
            transparent={true}
            presentationStyle="overFullScreen"
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text className="text-secondary uppercase mb-5 font-bold text-xl">{transaction} </Text>
                    {props.component}
                    <View className="flex w-full flex-row p-2">
                        <View className="flex w-full flex-row gap-x-1">
                            <View className="flex w-1/2">
                                <Button onclick={() => setModalVisible(!modalVisible)} title="cancel" />
                            </View>
                            <View className="flex w-1/2">
                                <Button title={transaction === "Loan application" ? "Apply" : "Pay"} />
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </Modal>
    )
}


export default Modal_window
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        height: 1 / 2 * Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        backgroundColor: Colors.quaternary,
        borderRadius: 20,
        padding: 35,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});