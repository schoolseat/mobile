import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import AuthRoutes from './tab.routes';
import { useApi } from '../hooks/auth';

import {
  Grade,
  Activity,
  CreateAccount,
  Notifications,
  RecoverPassword,
  UserIdentification,
} from '../pages';
const StackRoutes = createStackNavigator();

const AppRoutes = () => {
  const { user } = useApi();
  return (
    <StackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      {
        user
          ? (
            <>
              <StackRoutes.Screen name="Calendar" component={AuthRoutes} />

              <StackRoutes.Screen name="Grade" component={Grade} />
              <StackRoutes.Screen name="Activity" component={Activity} />
              <StackRoutes.Screen name="Notifications" component={Notifications} />
            </>
          )
          : (

            <>
              <StackRoutes.Screen name="UserIdentification" component={UserIdentification} />
              <StackRoutes.Screen name="CreateAccount" component={CreateAccount} />
              <StackRoutes.Screen name="RecoverPassword" component={RecoverPassword} />
            </>
          )
      }
    </StackRoutes.Navigator>
  )
};

export default AppRoutes