import React from 'react';
import Navigator from './src/Navigator/navigator'
import About from './src/aboutAmericren/about'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component  {

  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator />
        {/* <About /> */}
        {/* <Text>Open up App.js to view your first app like HELLO WORLD!</Text> */}
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // top:50,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
