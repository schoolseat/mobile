/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Platform } from 'react-native';

import colors from '../styles/colors';
import {
  Calendar,
  Home,
  Profile,
  CreateClass,
} from '../pages';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => (
  <AppTab.Navigator
    tabBarOptions={{
      activeTintColor: colors.green,
      inactiveTintColor: colors.heading,
      labelPosition: 'beside-icon',
      style: {
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        backgroundColor: colors.background,
        height: 60,
      },
    }}
  >
    <AppTab.Screen
      name=" "
      component={Home}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AntDesign
            name="home"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <AppTab.Screen
      name="  "
      component={Calendar}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AntDesign
            name="calendar"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <AppTab.Screen
      name="   "
      component={CreateClass}
      options={{
        tabBarIcon: ({ size, color }) => (
            <AntDesign
            name="addusergroup"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <AppTab.Screen
      name="    "
      component={Profile}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AntDesign
            name="user"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </AppTab.Navigator>
);
export default AuthRoutes;
