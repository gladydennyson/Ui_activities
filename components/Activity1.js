import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Progress from 'react-native-progress';

import { Card } from 'react-native-elements'

var question = 'How was your day ?';
var answer = 'It _ awesome.';
var anspart = answer.split('_');
var current_ans = '_____';
var ops = ['is','was','were','am'];

export default class App extends Component {
  
  constructor(props) {
  super(props);
  this.state = {
    current_ans: current_ans,
  };
}
  
  _handleButtonPress = (ans) => {
    this.setState({ current_ans:ans });
  };

  render() {
    
    return (
    <View style={styles.container}>
           
          <View style={{margin:20}}>
          <Progress.Bar progress={0.6} height={8} unfilledColor={'rgba(154,154,154,1)'}width={320} borderWidth={0} borderRadius={0} />
          </View>
          <Text style={styles.titleQuestion}>
          Choose the correct word
          </Text>
          
            <View style={styles.questBox}>
               
              <Text style={{fontSize:20}}>{this.state.question}</Text>
            </View>
            
            <View style={styles.ansBox}>
              <View style={styles.ansLine}>
                <Text style={{fontSize:20}}>{anspart[0]}</Text>
                <Text style={{fontSize:20, fontWeight:'bold'}}>{this.state.current_ans}</Text>
                <Text style={{fontSize:20}}>{anspart[1]}</Text>
              </View>
            </View>
            
            <View style={styles.opsBox}>
              <Card containerStyle={{backgroundColor:'#ccc9c9'}}>
              <View style={styles.buttonLine}>
                <TouchableOpacity onPress={() => this._handleButtonPress(ops[0])}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>{ops[0]}</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => this._handleButtonPress(ops[1])}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>{ops[1]}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              
              <View style={styles.buttonLine}>
                <TouchableOpacity onPress={() => this._handleButtonPress(ops[2])}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>{ops[2]}</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => this._handleButtonPress(ops[3])}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>{ops[3]}</Text>
                  </View>
                </TouchableOpacity>
              </View>
             </Card>            
            </View>
            
  
            <View style={styles.subBox}>
                    <TouchableOpacity onPress={() => this._handleSubmitPress()}>
                      <View style={styles.button1}>
                        <Text style={{fontSize:20, color:'#ffffff'}}>SUBMIT</Text>
                      </View>
                    </TouchableOpacity>
            </View>
          
        </View> 
       );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  timer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 20,
    alignSelf: 'flex-start'

  },
  questBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
  },
  
  ansBox: {
    flex: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
  },
  
  ansLine: {
    flexDirection:'row', 
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  
  opsBox: {
   alignItems: 'center',
    justifyContent: 'center',
    flex:3,
    borderRadius:5
  },
  
  subBox: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
  },
  
  buttonLine: {
    flexDirection:'row', 
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  
  button: {
    margin: 25,
    width: 120,
    alignItems: 'center',
    backgroundColor: 'rgba(9, 22, 200, 0.6)',
    borderRadius: 10
  },
    
   button1: {
    margin: 25,
    width: 120,
    alignItems: 'center',
    backgroundColor: '#1c3370',
    borderRadius:5
  },
  
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
 titleQuestion:{
     justifyContent:'center',
     fontSize:22,
     fontWeight:'bold',
     padding:10,
     marginLeft:9,
     color:'#000000'
 }
});

