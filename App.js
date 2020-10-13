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
  FlatList,
  StatusBar,
} from 'react-native';
import { Button } from 'native-base';
import styles from "./src/Common/styles";
import Render from "./src/Class/Render";
var Data = [];
export default class app extends Component{
  constructor(props) {
      super(props);
      this.state = {
        fullName: "",
        phoneNumber: "",
        warningName: false,
        emptyName: false,
        warningPhone: false,
        emptyPhone: false,
        addDone: false,
      }
  }

  onDataAdd(){
    // this.setState({warningName: true})
      this.setState({emptyName: this.state.fullName.length==0});
      this.setState({emptyPhone: this.state.phoneNumber.length==0});
      var CurenState = this.state.fullName.length==0 
                 || this.state.phoneNumber.length==0;
    if( !CurenState)
    {
      Data.push({fullName: this.state.fullName, phoneNumber: this.state.phoneNumber});
      this.setState({addDone: true})
    }
  }

  onClear = () =>{
    alert("Test2");
    // this.TextInput(fullName = "");
  }

  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.rectangle}/>
        <View style = {styles.textContainer}>
          <Text style={[styles.text,{fontSize: 15},{fontWeight:"bold"},{marginLeft:20}]}>Full Name: </Text>
          {this.state.emptyName && <Text style={styles.warningtext}>Full Name cannot be left blank! </Text>}
          {this.state.warningName && <Text style={styles.warningtext}>Incorrect Full Name format! </Text>}
        </View>

          <TextInput
          type = "fullName"
          style={styles.textbox}
          placeholder="Full Name"
          onChangeText={text => this.setState({fullName: text}/*,{warningName: false}*/)}
          value={this.state.fullName}/>

        <View style = {styles.textContainer}>
          <Text style={[styles.text,{fontSize: 15},{fontWeight:"bold"},{marginLeft:20}]}>Phone Number: </Text>
          {this.state.warningPhone && <Text style={styles.warningtext}>Incorrect phone number format!</Text>}
          {this.state.emptyPhone && <Text style={styles.warningtext}>Phone Number cannot be left blank!</Text>}
        </View>
        <TextInput
          type = "PhoneNumber"
          style={styles.textbox}
          placeholder="Phone Number"
          onChangeText={text => this.setState({phoneNumber: text})}
          value={this.state.phoneNumber}/>

        {this.state.addDone && <Text style={{color : "blue"}}>Add to data done (OvO)</Text>}
        <View style={styles.buttonContainer}>
          <Button style={styles.buttonOK} onPress={() => this.onDataAdd()}>
            <Text style={[{fontWeight:"bold"},{fontSize:16},{color: 'black'}]}> Add Data </Text>
          </Button>

          <Button style={styles.buttonCance} onPress={() => this.onClear()}>
            <Text style={[{fontWeight:"bold"},{fontSize:16},{color: 'black'}]}> Clear </Text>
          </Button>
        </View>
        {(Data.length != 0)? <SafeAreaView style={styles.container}>
         
          <FlatList
            data={Data}

            keyExtractor={(item, index) => {return index.toString();} }
            renderItem={({item, index}) => {
              return(
                  <Render item={item} index={index} key={index} />
              )}}
          > </FlatList>
        </SafeAreaView> :
        <View>
        <Text style={{color:"red"}}>Empty</Text>
        </View>}
      </View>
      
    );
  }
};

