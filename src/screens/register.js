import { View, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Radiobox } from '../components'
import { ScrollView } from 'react-native-gesture-handler'


import { showToastWithGravity } from './helpers'
// import CheckBox from '@react-native-community/checkbox'
const Form = (props) => {
    const { toggleCheckBox, setToggleCheckBox, item, setItem } = props

    return (
        <View>
            <Input placeholder={props.nok ? "Full names of next of kin" : "first name"}
                label={props.nok ? "Full Names" : "First Name"}
                onChangeText={!props.nok ? (e) => setItem((prevState) => ({
                    ...prevState,
                    f_name: e,
                })) : (e) => setItem((prevState) => ({
                    ...prevState,
                    name: e,
                }))}
                // keyboardType='numeric'

                value={item.name}
            />
            {!props.nok && <Input placeholder="surname"
                label="surname "
                onChangeText={(e) => setItem((prevState) => ({
                    ...prevState,
                    s_name: e,
                }))}
                // keyboardType='numeric'

                value={item.surname}
            />}

            <Input placeholder="ID Number"
                label="Identification Number"
                onChangeText={(e) => setItem((prevState) => ({
                    ...prevState,
                    ID_no: e,
                }))}
                keyboardType='numeric'

                value={item.ID_no}
            />
            {!props.nok && <Input placeholder="DOB"
                label="Date Of Birth"
                onChangeText={(e) => setItem((prevState) => ({
                    ...prevState,
                    dob: e,
                }))}
                // keyboardType='numeric'

                value={item.dob}
            />}
            {props.nok && <Input placeholder="Relationship"
                label="Relationship"
                onChangeText={(e) => setItem((prevState) => ({
                    ...prevState,
                    relation: e,
                }))}
                // keyboardType='numeric'

                value={item.relation}
            />}
            {props.nok && <Input placeholder="phone number"
                label="phone number"
                onChangeText={(e) => setItem((prevState) => ({
                    ...prevState,
                    phone_number: e,
                }))}
                keyboardType='numeric'

                value={item.phone_number}
            />}
            <Radiobox
                label="Gender"
                data={[{ value: "male" },
                { value: "female" }]}
                onchange={(e) =>
                    setItem((prevState) => ({
                        ...prevState,
                        gender: e,
                    }))} />


        </View>
    )
}
const Register = (props) => {
    const { show, setShow } = props
    const [item, setItem] = useState({ ID_no: "", f_name: '', s_name: '', dob: '', gender: '' })
    const [nextItem, setNextItem] = useState({ ID_no: "", name: "", relation: '', phone_number: '', gender: '' })
    const [toggleCheckBox, setToggleCheckBox] = useState(false)


    const submit = async () => {
        const { ID_no, gender, name, phone_number, relation } = nextItem
        item.nextkinname = name
        item.nextkinphone = phone_number
        item.nextkinID = ID_no
        item.nextkingender = gender
        item.relation = relation
        // console.log(item)
        try {
            // let resultAction = dispatch(UpdateUser(item))
            // const originalPromiseResult = unwrapResult(resultAction)
            showToastWithGravity("Successfully updated user details")
            setShow(false)

        } catch (error) {
            showToastWithGravity(error)

            console.log("error", error)
        }

    }
    // showToastWithGravity("Successfully updated user details")
    return (
        <Modal

            animationType="slide"
            transparent={true}
            presentationStyle="overFullScreen"
            visible={show}
        >
            <View className="flex h-screen bg-whitewash">
                <ScrollView className="h-full p-2">

                    <Text className="text-secondary uppercase mb-5 font-bold text-xl text-center">Registration</Text>
                    <View className="h-full">
                        <Form
                            item={item}
                            setItem={setItem}
                            toggleCheckBox={toggleCheckBox}
                            setToggleCheckBox={setToggleCheckBox}
                        />
                        <Text className="text-secondary uppercase mb-5 font-bold text-xl text-center">Next Of Kin</Text>
                        <Form
                            item={nextItem}
                            setItem={setNextItem}
                            nok={true}
                            toggleCheckBox={toggleCheckBox}
                            setToggleCheckBox={setToggleCheckBox}
                        />
                        <Text className="text-secondary uppercase mb-5 font-bold text-xl text-center">Referral</Text>

                        <Input placeholder="Referral number"
                            label="Referral number"
                            onChangeText={(e) => setItem((prevState) => ({
                                ...prevState,
                                referral: e,
                            }))}
                            keyboardType='numeric'

                            value={item.referral}
                        />
                        <View className="flex w-full flex-row p-2">
                            <View className="flex w-full flex-row gap-x-1">
                                <View className="flex w-full">

                                    <Button
                                        onclick={() => {
                                            submit();
                                            // setShow(!show)
                                        }}
                                        title="Update registration"
                                    />
                                </View>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

export default Register