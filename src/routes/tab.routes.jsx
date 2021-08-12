/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Platform } from 'react-native';

import colors from '../styles/colors';
import {
  Home,
  Profile,
  Calendar,
  CreateClass,
} from '../pages';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => (
  <AppTab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      activeTintColor: colors.green,
      inactiveTintColor: colors.heading,
      style: {
        height: 60,
        backgroundColor: colors.background,
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
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
            size={size}
            name="calendar"
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
            size={size}
            name="addusergroup"
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
            size={size}
            name="user"
            color={color}
          />
        ),
      }}
    />
  </AppTab.Navigator>
);
export default AuthRoutes;
