import { createStackNavigator } from '@react-navigation/stack';
import { Pressable, Text, View } from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import Auth from '../screens/auth';
import Splash from '../screens/splash';
import Dashboard from '../screens/dashboard';
import { Colors } from '../config';
import Settings from '../screens/settings';
import Trasactions from '../screens/trasactions';
import Borrow from '../screens/borrow';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Profile from '../screens/profile';
import Referals from '../screens/referals';
import Loandetails from '../screens/loandetails';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function BottomTab({ route }) {

    return (

        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.whitewash,
                tabBarIconStyle: {
                    // backgroundColor: "red"
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: Colors.secondary
                },
            }}
        >

            <Tab.Screen name="Home"
                component={Dashboard}

                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: Colors.primary,
                        elevation: 0
                    },

                    tabBarLabel: 'Home',

                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={30} color={Colors.primary} />

                    ),
                }}

            />
            <Tab.Screen name="Transact"
                options={
                    {
                        headerShown: false,
                        tabBarLabel: 'Transactiona',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="money" size={30} color={Colors.primary} />

                        ),
                    }
                }
                component={Trasactions} />
            <Tab.Screen name="Borrow"
                options={
                    {
                        headerShown: false,
                        tabBarLabel: 'loans',
                        tabBarIcon: ({ color, size }) => (
                            <FAIcon name="donate" size={26} color={Colors.primary} />

                        ),
                    }
                }
                component={LoanStack} />
            <Tab.Screen name="Referals"
                options={
                    {
                        headerShown: false,
                        tabBarLabel: 'loans',
                        tabBarIcon: ({ color, size }) => (
                            <FAIcon name="users" size={26} color={Colors.primary} />

                        ),
                    }
                }
                component={Referals} />
        </Tab.Navigator>

    );
}


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View className="w-full h-52 bg-quaternary flex items-center justify-center ">
                <View className="w-36 h-36 bg-primary flex items-center justify-center rounded-full">
                    <Icon name="user" size={110} color={Colors.whitewash} />
                </View>
                <Text className="text-xl text-primary font-bold">Kennedy Makokha</Text>

            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}
function Root() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    // backgroundColor: '',
                    // width: 240,
                },
                // overlayColor: 'yellow',
            }}
            drawerContent={CustomDrawerContent}
        >
            <Drawer.Screen
                name="Ts"

                options={{
                    // headerShown: 'tru',
                    headerTransparent: true,
                    headerTitleStyle: {
                        color: Colors.tertiary
                    }
                }}
                component={BottomTab} />
            <Drawer.Screen
                options={{
                    headerTransparent: true,
                    headerTitleStyle: {
                        color: Colors.primary
                    }
                }}
                name="Profile" component={Profile}
            />
            <Stack.Screen name="Settings" component={SettingStack} />
        </Drawer.Navigator>
    );
}

function SettingStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="settings"
                screenOptions={{ headerShown: false }}
                options={{
                    // title: "spas",
                    headerShown: false
                }}

                component={Settings} />
        </Stack.Navigator>
    );
}
function LoanStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="loans"
                screenOptions={{ headerShown: false }}
                options={{
                    // title: "spas",
                    headerShown: false
                }}

                component={Borrow} />
            <Stack.Screen name="loansDetails"
                screenOptions={{ headerShown: true }}
                options={({ route }) => ({

                    title: `${route.params?.data?.title}`,
                    headerStyle: {
                        backgroundColor: Colors.primary,
                        elevation: 0

                    },

                    headerTintColor: Colors.quaternary,
                    headerTitleStyle: {
                        fontWeight: 'semibold',
                        textTransform: 'uppercase',
                        letterSpacing: 2,
                        color: Colors.primary
                        // textAlign: 'center'
                    },

                })}

                component={Loandetails} />
        </Stack.Navigator>
    );
}

export default function AuthStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="splash"
                screenOptions={{ headerShown: false }}
                options={{
                    headerShown: false
                }}

                component={Splash} />

            <Stack.Screen name="Login"
                screenOptions={{}}
                component={Auth}

                options={({ route }) => ({
                    title: ``,
                    headerStyle: {
                        backgroundColor: Colors.primary,
                        elevation: 0

                    },

                    headerTintColor: Colors.quaternary,
                    headerTitleStyle: {
                        fontWeight: 'semibold',
                        textTransform: 'uppercase',
                        letterSpacing: 2
                        // textAlign: 'center'
                    },
                })}
            />
            <Stack.Screen name="Dashboard"
                component={Root}
                // options={({ route }) => ({ title: ` Welcome ${route.params.name}` })} 
                options={() => ({
                    title: 'My home',
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                })}
            />
        </Stack.Navigator>
    );
}