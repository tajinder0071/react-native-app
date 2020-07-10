import * as React from 'react';
import { Text, } from 'react-native';

export function TextView(props) {
    return <Text style={props.style}> {props.text}</Text>
}