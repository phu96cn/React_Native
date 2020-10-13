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
                    <View style={{marginLeft: 20}}>
                        <View style={{marginLeft: 20}}>
                            <Text style={{marginLeft: 20}}>
                                {this.props.item.fullName}
                            </Text>
                        </View>
                    </View>
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
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    }

})

export default Render;