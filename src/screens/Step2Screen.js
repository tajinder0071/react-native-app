import * as React from 'react';
import { View, SafeAreaView, StatusBar, FlatList, Platform, } from 'react-native';
import styles from '../styles/Step2Styles'

import COLOR from '../styles/Color';
// import Fonts from '../constants/FontNames';
import Strings from '../data/Strings';
import Header from '../components/Header'
import Row from '../components/Row'
import { TextView } from '../components/TextView'
import { MyButton } from '../components/MyButton'
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

    onRowClick = (id) => {

        let listData = [...this.state.data];
        for (let data of listData) {
            if (data.id == id) {

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

                <Header totalSteps="7" currentStep="2" ></Header>

                <TextView style={styles.heading} text={Strings.HEADING}></TextView>
                <TextView style={styles.subHeading} text={Strings.SUB_HEADING}></TextView>


                <FlatList
                    style={{ marginBottom: 70, }}
                    data={this.state.data}
                    renderItem={({ item }) => this.renderRow(item)}
                    keyExtractor={item => `${item.id}`}
                />
                <MyButton
                    onClick={() => alert("I'm working")}
                    title={Strings.BTN_TITLE} />
            </SafeAreaView>
        </View>
    }
    renderRow = (item) => {

        return <Row
            item={item}
            itemClick={(id) => this.onRowClick(id)}></Row>


    }
}
