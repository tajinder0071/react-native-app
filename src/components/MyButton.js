import * as React from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import styles from '../styles/Step2Styles'


export function MyButton(props) {
    return <TouchableOpacity style={styles.button} onPress={() =>
        props.onClick()}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
}