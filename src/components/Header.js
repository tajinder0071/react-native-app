import * as React from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet, } from 'react-native';
import COLOR from '../styles/Color';
import * as Images from '../data/Images';
import { ProgressBar } from 'react-native-paper';

export default class Header extends React.Component {

    constructor(props){
        super(props)
    }
    render() {

        return <View style={styles.headerContainer}>
        {this.renderBack()}
        <View style={styles.stepperContainer}>
            <Text style={styles.stepText}>{`Step ${this.props.currentStep}/${this.props.totalSteps}`}</Text>
            <ProgressBar style={styles.progress} progress={0.2} color={COLOR.PRIMARY} />
        </View>

    </View>

    }
    renderBack = () => {
        return (<View style={{
            width: "15%",
            justifyContent: 'center',


            flexDirection: 'row',
        }}>

            <TouchableOpacity
                style={{ width: 50, height: 50, justifyContent: 'center', }}
                onPress={() =>
                    console.log("clicked")}>
                <Image style={{
                    width: 20, height: 20, resizeMode: 'cover',
                    alignSelf: 'center',
                }} source={Images.back} />
            </TouchableOpacity>


        </View>);
    }

}
const styles = StyleSheet.create({
    stepperContainer: { width: "70%", justifyContent: 'center', flexDirection: 'column', },
    stepText: { fontWeight: '400', color: COLOR.BLACK, alignSelf: 'center', },
    progress: { marginTop: 5, },
    headerContainer: {
        flexDirection: 'row', width: "100%",
    },
  });