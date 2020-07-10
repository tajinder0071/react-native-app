import * as React from 'react';
import { View, SafeAreaView, StatusBar, FlatList, Text, TouchableOpacity, Platform,Image, } from 'react-native';
import styles from '../styles/Step2Styles'
import { Card,  } from "react-native-elements";
import COLOR from '../styles/Color';
// import Fonts from '../constants/FontNames';
import Strings from '../data/Strings';
import Header from '../components/Header'
import * as Images from '../data/Images';
import listData from '../data/ListData'

export default class Step2Screen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: listData
        };
    }
    componentDidMount() {

    }
    onProfilePress = (item) => {

        let listData = [...this.state.data];
        for (let data of listData) {
            if (data.id == item.id) {

                data.selected = (data.selected == null) ? true : !data.selected;
                break;
            }
        }
        this.setState({ listData });
    };
    render() {

        return <View style={styles.container}>
            <StatusBar
                translucent={false}
                backgroundColor={COLOR.WHITE}
                barStyle={Platform.OS == 'ios' ? "dark-content" : "light-content"} />
            <SafeAreaView style={styles.container}>

                {this.renderHeader()}
                {this.renderHeading()}
                {this.renderSubHeading()}
                
                <FlatList
                    style={{ marginBottom: 70, }}
                    data={this.state.data}
                    renderItem={({ item }) => this.renderItemOnBasisOfType(item)}
                    keyExtractor={item => `${item.id}`}
                />
                {this.renderButton()}
            </SafeAreaView>
        </View>
    }


    renderHeader = () => {
        return <Header totalSteps="7" currentStep="2" ></Header>

    }

    renderHeading = () => {
        return <Text style={styles.heading}>{Strings.HEADING}</Text>

    }
    renderSubHeading = () => {
        return <Text style={styles.subHeading}>{Strings.SUB_HEADING}</Text>

    }

    renderButton = () => {
        return <TouchableOpacity style={styles.button} onPress={() =>
            this.onProfilePress(item)}>
            <Text style={styles.buttonText}>Weiter</Text>
        </TouchableOpacity>
    }

    renderCheckUncheck = (isSelected) => {
        return   <Image style={styles.checkUncheck} source={isSelected == true ?Images.check:Images.uncheck} />
    }

    renderItemOnBasisOfType = (item) => {


        const isSelected = item.selected

        return <TouchableOpacity onPress={() =>
            this.onProfilePress(item)}>
            <Card

                containerStyle={styles.cardContainer}>
                <View style={[styles.cardInnerContainer,{backgroundColor: isSelected == true ? COLOR.TRANS_WHITE : COLOR.WHITE,}]} >
                {this.renderCheckUncheck(isSelected)}
                    <Text style={[styles.cardText,{fontWeight: isSelected == true ? 'bold' : 'normal' }]}>{item.name}</Text>

                </View>


            </Card>

        </TouchableOpacity>

    }
}
