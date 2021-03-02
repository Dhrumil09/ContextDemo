import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class CustomTabBarItem extends React.PureComponent {
  render() {
    const {name, focused, onPress, appState} = this.props;
    if (appState) {
      return (
        <TouchableOpacity style={styles.tabItem} onPress={onPress}>
          <Text style= {focused ? {color: '#ff0000'}:{color: '#000000'}}>{name}</Text>
        </TouchableOpacity>
      );
    } else {
      return <View />;
    }
  }
}

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcbcfb',
    borderRadius: 10,
    //borderColor: '#000',
  },
});
