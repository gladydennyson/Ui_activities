import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


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

        <View style={styles.questBox}>
          <Text style={{ fontSize: 20 }}>
            Q: {ques}
          </Text>
        </View>
        <View style={styles.ansBox}>
          <Text style={styles.answer}>
            A: {answer}
          </Text>
        </View>
        <View style={styles.hint}>
          <Text style={{ color: 'white' }}>
            Pick words from the list below to form your answer
          </Text>
        </View>
  
        <View style={styles.opsBox} >
          
          <View >
      			{ buttons }
      		</View>

        </View>
        <View style={styles.subBox}>
            <TouchableOpacity onPress={() => this._clear()}>
              <View style={styles.button}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff'}}>CLEAR</Text>
              </View>
          </TouchableOpacity>
        </View>
        <View style={styles.subBox}>
            <TouchableOpacity>
              <View style={styles.button}>
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
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#34495e',
  },
  button: {
    margin: 10,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#3F51B5',
  },
  buttonText: {
    padding: 5,
  },
    opsBox: {
    flexDirection: 'row',
    flex: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#5C6BC0',
  },
  hint: {
    paddingTop: 15,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#5C6BC0',
  },
  ansBox: {
    flex: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7986CB',
    flexDirection: 'row',
  },
  questBox: {
    flex: 2,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#9FA8DA',
  },
  subBox: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#3F51B5',
  },
});