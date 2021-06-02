import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import colors from '../styles/colors';
import { 
    Calendar,
    Home,
    Profile,
    Messages
    } from '../pages'

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: Platform.OS ==='ios' ? 20 : 0,
                    backgroundColor: colors.background,
                    height: 60,
                }
            }}
        >
             <AppTab.Screen
                name=' '
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                    <AntDesign 
                        name="home" 
                        size={size} 
                        color={color}
                         />
                    )
                }}
            />
            <AppTab.Screen
                name='  '
                component={Calendar}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="calendar" 
                        size={size} 
                        color={color} 
                        />

                    )
                }}
            />
            <AppTab.Screen
                name='   '
                component={Messages}
                options={{
                    tabBarIcon: ({ size, color }) => (
                    <EvilIcons 
                        name="comment" 
                        size={size} 
                        color={color}
                         />
                    )
                }}
            />
            <AppTab.Screen
                name='    '
                component={Profile}
                options={{
                    tabBarIcon: ({ size, color }) => (
                    <AntDesign 
                        name="user" 
                        size={size} 
                        color={color}
                         />
                    )
                }}
            />
        </AppTab.Navigator>
    )
}
export default AuthRoutes;