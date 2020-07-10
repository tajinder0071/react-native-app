import * as React from 'react';
import { View, SafeAreaView, StatusBar, FlatList, Text, TouchableOpacity, Platform, Image, } from 'react-native';
import styles from '../styles/Step2Styles'
import * as Images from '../data/Images';

export default class CheckBox extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        const isSelected = this.props.isSelected
        
        return <Image style={styles.checkUncheck} source={isSelected == true ? Images.check : Images.uncheck} />
    }
}