/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';
import { Button } from 'native-base';
import styles from "./src/Common/styles";

export default class app extends Component{
  constructor(props) {
      super(props);
      this.state = {
        fullName: "",
        phoneNumber: "",
      }
  }

  onDataAdd = () =>{
    alert("Test1");
  }

  onClear = () =>{
    alert("Test2");
  }

  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.rectangle}/>
      <TextInput
        type = "fullName"
        style={styles.textbox}
        placeholder="Full Name"
        onChangeText={text => this.setState({fullName: text})}
        value={this.state.fullName}
      />
      <TextInput
        type = "PhoneNumber"
        style={styles.textbox}
        placeholder="Phone Number"
        onChangeText={text => this.setState({phoneNumber: text})}
        value={this.state.phoneNumber}
      />
      
      <View style={styles.buttonContainer}>
          <Button style={styles.buttonOK} onPress={() => this.onDataAdd()}
          >
            <Text style={[{fontWeight:"bold"},{fontSize:16},{color: 'black'}]}> Add Data </Text>
          </Button>
          <Button style={styles.buttonCance} onPress={() => this.onClear()}
          >
            <Text style={[{fontWeight:"bold"},{fontSize:16},{color: 'black'}]}> Clear </Text>
          </Button>
        </View>
      </View>

    );
  }
};

