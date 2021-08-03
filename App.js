
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'


export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text:'',
      displayText:''

    }
  }
  render() {
    return (
      <View style={styles.container}>

 <Header
      backgroundColor = {'purple'}
      centerComponent = {{text:'Monkey Chunky',
      style :{color : 'white',fontSize :20}
      }}>
        </Header> 

<TextInput style = {styles.buttonText}
onChangeText = {(text)=>{
  this.setState({
    text:text
  })
}}
value = {this.state.text}

></TextInput>

<TouchableOpacity
  style = {styles.goButton}  onPress = {
    ()=>{
      this.setState({
        displayText:this.state.text
      })
    }
  }>
    <Text>GO</Text>
  </TouchableOpacity>
  <Text style={styles.displayTexts}>{
  this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
 
  },
  buttonText:{
    marginTop:200,
    width:'40%',
    height:40,
    alignSelf:'center',
    textAlign:'center',
    borderWidth:3
  },
  goButton:{
    width:'44%',
    height:30,
    alignSelf:'center',
    marginTop:30
  },
  displayTexts:{
    textAlign:'center'
  }
});
