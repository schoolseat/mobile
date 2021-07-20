import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';

import AuthRoutes from './tab.routes';

import {
  Grade,
  Activity,
  CreateAccount,
  Notifications,
  RecoverPassword,
  UserIdentification,
} from '../pages';

const StackRoutes = createStackNavigator();

const AppRoutes = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <StackRoutes.Screen name="UserIdentification" component={UserIdentification} />

  
    <StackRoutes.Screen name="Grade" component={Grade} />
    <StackRoutes.Screen name="Activity" component={Activity} />
    <StackRoutes.Screen name="Calendar" component={AuthRoutes} />
    <StackRoutes.Screen name="Notifications" component={Notifications} />
    <StackRoutes.Screen name="CreateAccount" component={CreateAccount} />
    <StackRoutes.Screen name="RecoverPassword" component={RecoverPassword} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
