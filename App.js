

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { FadeAnimation } from "./src/Components/Animations/index"
// import HimmatFan from "./src/Components/HimmatFan/index"



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FadeAnimation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },

});
