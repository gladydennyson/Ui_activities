import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';

import * as Progress from 'react-native-progress';


var received_comp = new Array();
var received_supp = new Array();
received_comp = 'apple ate';
received_supp = 'I had an was';
var comp_words = new Array();
var supp_words = new Array();
var answer = '';
var message1 = 'Compulsary words';
var message2 = 'Supplementary words';







export default class Activity4 extends Component {
    
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

  comp_words = received_comp.split(" ");
  
  var buttons1 = [];
  var len1 = comp_words.length;
	for(let i = 0; i < len1; i++){

      		buttons1.push(
	        <TouchableOpacity onPress={() => this._handleButtonPress(comp_words[i])}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{comp_words[i]}</Text>
              </View>
          </TouchableOpacity>
		    )

	}
	
	supp_words = received_supp.split(" ");
  
  var buttons2 = [];
  var len2 = supp_words.length;
	for(let i = 0; i < len2; i++){

      		buttons2.push(
	        <TouchableOpacity onPress={() => this._handleButtonPress(supp_words[i])}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{supp_words[i]}</Text>
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



        
      	<View style={styles.hint}>
          <Text style={{ color: 'white' }}>
            Your answer
          </Text>
        </View>
        <View style={styles.opsBox} >
          <Text style={{fontSize:20}}>
            {answer}
          </Text>
        </View>


        <View style={styles.compBox}>
          <Text style={styles.text}>
            {message1}
          </Text>
          <View style={styles.grid}>
      			{ buttons1 }
      		</View>
        </View>
        <View style={styles.supBox}>
          <Text style={styles.text}>
            {message2}
          </Text>
          <View style={styles.grid}>
      			{ buttons2 }
      		</View>
        </View>
        
      <View style={{flex: 1, flexDirection: 'row', marginBottom:10}}>

              <View style={styles.subBox}>
              <TouchableOpacity onPress={() => this._clear()}>
              <View style={styles.button1}>
                <Text style={{fontSize:25, fontWeight:'bold', color:'#BB0000'}}>CLEAR</Text>
              </View>
              </TouchableOpacity>
              </View>


              <View style={styles.subBox}>
                    <TouchableOpacity onPress={() => this._handleSubmitPress()}>
                      <View style={styles.button1}>
                        <Text style={{fontSize:25, color:'#ffffff'}}>SUBMIT</Text>
              </View>
                    </TouchableOpacity>
            </View>
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
      backgroundColor: '#e5e5e5',
  },
  button: {
    margin: 5,
    width: Dimensions.get('window').width/3 - 20,
    alignItems: 'center',
    backgroundColor: '#3F51B5',
  },
  buttonText: {
    padding: 5,
  },
    opsBox: {
    flexDirection: 'row',
    fontSize: 25,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#5C6BC0',
  },
  hint: {
    padding: 15,

    alignSelf: 'stretch',
    backgroundColor: '#5C6BC0',
  },
  supBox: {
    flex: 4,
    alignSelf: 'stretch',
    backgroundColor: '#7986CB',
  },
  compBox: {
    flex: 4,
    alignSelf: 'stretch',
    backgroundColor: '#9FA8DA',
  },
  subBox: {
    flex: 2,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
  },
  text: {
    padding: 10,
    fontSize: 18,
  },
  grid: {

    flexDirection: 'row',
    flexWrap: 'wrap'
  },
   titleQuestion:{
     justifyContent:'center',
     fontSize:22,
     fontWeight:'bold',
     padding:10,
     marginLeft:9,
     color:'#000000'
 },
    button1: {
    margin: 25,
    width: 120,
    alignItems: 'center',
    backgroundColor: '#1c3370',
    borderRadius:5
  },
});