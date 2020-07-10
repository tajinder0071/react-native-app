import { StyleSheet, Dimensions, Platform } from 'react-native';

import COLOR from './Color';

const { width, height } = Dimensions.get('window')


export default StyleSheet.create({


    container: { flex: 1, backgroundColor: COLOR.WHITE, },

    image: { resizeMode: 'contain', width: '70%', height: '100%', alignSelf: 'center', marginTop: 0, },


    buttonLabel: {
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        // fontFamily: Fonts.Montserrat_Medium,

        fontSize: 16,
        fontStyle: 'normal',
        shadowColor: COLOR.PRIMARY,




    },

    heading: { alignSelf: 'center', fontWeight: "bold", fontSize: 22, padding: 20, textAlign: 'center', color: COLOR.PRIMARY, },
    subHeading: { alignSelf: 'center', fontWeight: "bold", fontSize: 18, padding: 0, textAlign: 'center', },
    cardContainer:
    
        {
            borderRadius: 0, minHeight: 60, borderWidth: 0,
            elevation: 2,
            padding: 0, justifyContent: 'center'
        }
    ,
    cardInnerContainer:{ flexDirection: 'row',  flex: 1, minHeight: 60, padding: 10, },
    cardText:{ fontSize: 14, color: COLOR.BLACK, alignSelf: 'center',marginLeft:10, },
    button: {
        minHeight: 45, width: "90%",
        justifyContent: 'center',
        borderRadius: 22, backgroundColor: COLOR.PRIMARY, bottom: 10, position: 'absolute', alignSelf: 'center',
    },
    buttonText: { color: COLOR.WHITE, fontWeight: 'bold', alignSelf: 'center', fontSize: 16, },
    checkUncheck:{
        width: 20, height: 20, resizeMode: 'contain',
        alignSelf: 'center',
    },

});