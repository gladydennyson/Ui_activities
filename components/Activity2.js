import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

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
            <TouchableOpacity>
              <View style={styles.subButton}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff'}}>SUBMIT</Text>
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
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#34495e',
  },
  
  questBox: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#9FA8DA',
  },
  
  ansBox: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7986CB',
  },
  
  opsBox: {
    flex: 3,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#5C6BC0',
  },
  
  subBox: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#3F51B5',
  },
  
  button: {
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#5C6BC0',
    marginRight: 10,
    marginLeft: 10,
    borderRadius:20
  },
  
  subButton: {
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    alignSelf: 'stretch',
  },
  
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 20,
  }
});