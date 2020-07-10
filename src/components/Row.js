import * as React from 'react';
import { View, Text, TouchableOpacity,Image,  } from 'react-native';
import styles from '../styles/Step2Styles'
import { Card, } from "react-native-elements";
import COLOR from '../styles/Color';
// import Fonts from '../constants/FontNames';

import Header from '../components/Header'
import * as Images from '../data/Images';
import listData from '../data/ListData'
import CheckBox from '../components/CheckBox';

export default class Row extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        const isSelected = this.props.item.selected
        const name = this.props.item.name
        const id = this.props.item.id
        return <TouchableOpacity onPress={()=>this.props.itemClick(id)}>
            <Card

                containerStyle={styles.cardContainer}>
                <View style={[styles.cardInnerContainer, { backgroundColor: isSelected == true ? COLOR.TRANS_WHITE : COLOR.WHITE, }]} >
                    {this.renderCheckUncheck(isSelected)}
                    <Text style={[styles.cardText, { fontWeight: isSelected == true ? 'bold' : 'normal' }]}>{name}</Text>

                </View>


            </Card>

        </TouchableOpacity>
    }
    renderCheckUncheck = (isSelected) => {
        return <CheckBox isSelected={isSelected}></CheckBox>
        //  <Image style={styles.checkUncheck} source={isSelected == true ? Images.check : Images.uncheck} />
    }
}