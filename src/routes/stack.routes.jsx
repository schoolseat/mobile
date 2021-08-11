import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import AuthRoutes from './tab.routes';
import { useApi } from '../hooks/auth';

import {
  Grade,
  Login,
  Activity,
  CreateClass,
  CreateAccount,
  RecoverPassword,
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
              <StackRoutes.Screen name="CreateClass" component={CreateClass} />
            </>
          )
          : (

            <>
              <StackRoutes.Screen name="Login" component={Login} />
              <StackRoutes.Screen name="CreateAccount" component={CreateAccount} />
              <StackRoutes.Screen name="RecoverPassword" component={RecoverPassword} />
            </>
          )
      }
    </StackRoutes.Navigator>
  )
};

export default AppRoutes