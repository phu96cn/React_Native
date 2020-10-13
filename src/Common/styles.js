
import{
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    rectangle:{
        width: 50,
        height:60,
        borderWidth:2,
        borderColor:"red"
    },
    textbox:{
        marginTop:5,
        width:250,
        height:35,
        borderWidth:1,
        borderColor:"grey"
    },
    text:{

    },
    warningtext:{

    },
    buttonContainer: {
        flexDirection:"row",
        margin: 20,
        justifyContent: "space-around"
    },
    buttonCance:{
        marginLeft: 20,
        backgroundColor:'#00CCFF',
		borderRadius:10,
		borderWidth: 1,
		borderColor: '#0033CC',
        height: 40,
        width:80,
        justifyContent: "center",
    },
    buttonOK:{
        marginLeft: 20,
        backgroundColor:'#00CCFF',
		borderRadius:10,
		borderWidth: 1,
		borderColor: '#0033CC',
		height: 40,
        width:80,
		justifyContent: "center",
    }
});
export default styles;