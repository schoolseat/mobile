import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';

import AuthRoutes from './tab.routes';

import { UserIdentification} from '../pages'

const StackRoutes = createStackNavigator();

const AppRoutes = () => (
    <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
        cardStyle: {
            backgroundColor: colors.white
        }
    }}
    >
        <StackRoutes.Screen name="Calendar" component={AuthRoutes} />
        <StackRoutes.Screen name="UserIdentification" component={UserIdentification} />  
    </StackRoutes.Navigator>
)

export default AppRoutes;