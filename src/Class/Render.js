import React, { Component } from 'react';
//import { TouchableOpacity } from 'react-native-gesture-handler';

import{
    StyleSheet,
    View,
    Text,
} from 'react-native';

class Render extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        //<TouchableOpacity >
        return(
                <View style={styles.container}>
                            <Text style={styles.fullName}>
                                {this.props.item.fullName}
                            </Text>
                            <Text style={styles.phoneNumber}>
                                {this.props.item.phoneNumber}
                            </Text>
                </View>
           // </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        marginLeft:16,
        marginRight:16,
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    fullName:{
        flex: 5,
        marginLeft:20,

    },
    phoneNumber:{
        flex: 5,
    }

})

export default Render;