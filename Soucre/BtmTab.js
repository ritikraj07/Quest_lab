import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native'
import { Icon } from '@rneui/themed';

import Foundation from "react-native-vector-icons/Foundation";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";



import HomeScreen from './Screens/Home'
import OrderScreen from './Screens/Order'
import ProfileScreen from './Screens/Profile'

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                color: 'white',
                tabBarActiveTintColor:'white',
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    height: 70,
                    borderRadius: 15,
                    backgroundColor: 'black',
                }
            }}
        >

            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <>
                            {focused ? (
                                <Foundation name="home" size={30} color={color} />
                            ) : (
                                <Octicons name="home" size={30} color={color} />
                            )}
                            <Text style={{ color: "white", fontSize: 15 }}>Home</Text>
                        </>
                    )
                }}
            />
            <Tab.Screen name="Order" component={OrderScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <>
                            {focused ? (
                                <MaterialIcons name="shopping-bag" size={30} color={color} />
                            ) : (
                                <SimpleLineIcons name="bag" size={30} color={color} />
                            )}
                            <Text style={{ color: "white", fontSize: 15 }}>Order</Text>
                        </>
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <>
                            {focused ? (
                                <FontAwesome name="user" size={30} color={color} />
                            ) : (
                                <FontAwesome name="user-o" size={30} color={color} />
                            )}
                            <Text style={{ color: "white", fontSize: 15 }}>Profile</Text>
                        </>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}