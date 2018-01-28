import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Progress from 'react-native-progress';

import { Card } from 'react-native-elements';

var ans = new Array();
var answer = '';
ans[0] = 'this';
ans[1] = 'is';
ans[2] = 'not';
ans[3] = 'fun';
var ques = 'What are you doing?';
var len = ans.length;
export default class Activity3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      answer: answer,
    };
  }

  _handleButtonPress = ans => {
    answer = answer + ' ' + ans;
    this.setState({ answer: answer });
  };
  
  _clear = () => {
    answer = " ";
    this.setState({ answer: answer });
  };
  
  
  render() {
    
  var buttons = [];

	for(let i = 0; i < len; i++){

      		buttons.push(
	        <TouchableOpacity onPress={() => this._handleButtonPress(ans[i])}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{ans[i]}</Text>
              </View>
          </TouchableOpacity>
		    )

	}
      
    
    return (
      <View style={styles.container}>
          <View style={{margin:20}}>
          <Progress.Bar progress={0.6} height={8} unfilledColor={'rgba(154,154,154,1)'}width={320} borderWidth={0} borderRadius={0} />
          </View>
          <Text style={styles.titleQuestion}>
         Pick the words from the list to form your answer
          </Text>


          <View style={styles.questBox}>
                <Text style={{ fontSize: 20 }}>
            {ques}
          </Text>
            </View>


            <View style={styles.ansBox}>
              <Text style={styles.answer}>
                 {answer}
              </Text>
          </View>


          <View style={styles.opsBox}>
                      <View >
                    { buttons }
                  </View>
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
  answer:{
    fontSize:20
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

