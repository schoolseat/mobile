import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';

import AuthRoutes from './tab.routes';

import { UserIdentification, Activity, Messaging, Grade} from '../pages'

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
        <StackRoutes.Screen name="UserIdentification" component={UserIdentification} />  
        <StackRoutes.Screen name="activity" component={Activity} />
        <StackRoutes.Screen name="Calendar" component={AuthRoutes} />
        <StackRoutes.Screen name="Messaging" component={Messaging} />
        <StackRoutes.Screen name="Grade" component={Grade} />
    </StackRoutes.Navigator>
)

export default AppRoutes;