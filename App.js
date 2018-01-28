import React from 'react';
import { StackNavigator } from 'react-navigation';
 // 1.0.0-beta.14
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import { Constants } from 'expo';

import Activity1 from './components/Activity1';
import Activity2 from './components/Activity2';
import Activity3 from './components/Activity3';
import Activity4 from './components/Activity4';
import Activity5 from './components/Activity5';
import Activity6 from './components/Activity6';
import Activity7 from './components/Activity7';
import Activity8 from './components/Activity8';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <View style={styles.grid}>
      <TouchableOpacity onPress={() => navigation.navigate('Activity1')}>
        <View style={styles.button}>
          <Text style={{ padding: 10 }}>Activity 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Activity2')}>
        <View style={styles.button}>
          <Text style={{ padding: 10 }}>Activity 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Activity3')}>
        <View style={styles.button}>
          <Text style={{ padding: 10 }}>Activity 3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Activity4')}>
        <View style={styles.button}>
          <Text style={{ padding: 10 }}>Activity 4</Text>
        </View>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('Activity5')}>
        <View style={styles.button}>
          <Text style={{ padding: 10 }}>Activity 5</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Activity6')}>
        <View style={styles.button}>
          <Text style={{ padding: 10 }}>Activity 6</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Activity7')}>
        <View style={styles.button}>
          <Text style={{ padding: 10 }}>Activity 7</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Activity8')}>
        <View style={styles.button}>
          <Text style={{ padding: 10 }}>Activity 8</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
  Activity1: {
    screen: Activity1,
    navigationOptions: {
      headerTitle: 'Activity1',
    },
  },
  Activity2: {
    screen: Activity2,
    navigationOptions: {
      headerTitle: 'Activity2',
    },
  },
  Activity3: {
    screen: Activity3,
    navigationOptions: {
      headerTitle: 'Activity3',
    },
  },
  Activity4: {
    screen: Activity4,
    navigationOptions: {
      headerTitle: 'Activity4',
    },
  },
  Activity5: {
    screen: Activity5,
    navigationOptions: {
      headerTitle: 'Activity5',
    },
  },
  Activity6: {
    screen: Activity6,
    navigationOptions: {
      headerTitle: 'Activity6',
    },
  },
  Activity7: {
    screen: Activity7,
    navigationOptions: {
      headerTitle: 'Activity7',
    },
  },
  Activity8: {
    screen: Activity8,
    navigationOptions: {
      headerTitle: 'Activity8',
    },
  },
});

const styles = StyleSheet.create({
  button: {
    margin: 15,
    width: Dimensions.get('window').width / 3,
    alignItems: 'center',
    backgroundColor: '#7986CB',
  },
  grid: {
    margin: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default RootNavigator;
