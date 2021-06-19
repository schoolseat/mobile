import React from 'react';
import {  
    Text, 
    View,
    Dimensions
} from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';


import { RectButton } from 'react-native-gesture-handler'
import colors from '../../styles/colors';

export default function ActivitiesCard({ name,  icon, color, ...rest}) {
    return (
        <RectButton style={{
                backgroundColor: color, 
                width: Dimensions.get('window').width * 0.4,
                margin: 10,
                borderRadius: 15,
                alignItems: 'center'
            }
        } 
        {...rest}>
            <View style={styles.container}>
                <FontAwesome name={icon} size={24} color={colors.background} />
                <Text style={styles.text}>{name}</Text>
            </View>
        </RectButton>
    )
}