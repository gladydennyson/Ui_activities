import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Progress from 'react-native-progress';

import { Card } from 'react-native-elements'

var question = 'How are you ?';
var current_ans = 'What would be your reply?';
var ops = ['I am fine.',
            'I is fine.',
            'I were fine.',
            'I was fine.'];

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
          Select the right option
          </Text>
          
            <View style={styles.questBox}>
               
            <Text style={{fontSize:20}}>{question}</Text>
            </View>


          <View style={styles.ansBox}>
              <Text style={{fontSize:20, fontWeight:'bold'}}>{this.state.current_ans}</Text>
          </View>
          <View style={styles.opsBox}>
            
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
    marginLeft:20,
    backgroundColor: '#e5e5e5',
  },
  
  ansBox: {
    flex: 2,
    alignSelf: 'stretch',
    margin:20,
    backgroundColor: '#e5e5e5',
  },
  
  ansLine: {
    flexDirection:'row', 
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  
  opsBox: {
    flex:6,
    borderRadius:5,
    marginLeft:15
  },
  
  subBox: {
    flex: 2,
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
    width: 250,
    margin:5,
    alignItems: 'center',
    backgroundColor: 'rgba(9, 22, 200, 0.6)',
    borderRadius: 10,
    height:40,
    justifyContent:'center'
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
    fontWeight: 'bold',
   
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

