import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomTabBarItem from './CustomTabBarItem';
import NavContext from './Src/context/navContext';

class CustomTabBar extends React.Component {
  render() {
    // a tab bar component has a routes object in the navigation state
    CustomTabBar.contextType = NavContext;
    const {navigation} = this.props;
    const routes = navigation.state.routes;
    let value = this.context;
    console.log('context', this.context);

    const appState = [
      {
        routeName: 'Home',
        isDisplay: true,
      },

      {
        routeName: 'Browse',
        isDisplay: true,
      },
      {
        routeName: 'Search',
        isDisplay: value !== undefined && value.isshow,
      },
      {
        routeName: 'Radio',
        isDisplay: true,
      },
    ];

    return (
      <View style={styles.container}>
        {routes.map((route, index) => {
          return (
            <CustomTabBarItem
              key={route.key}
              name={route.routeName}
              onPress={() => this.navigationHandler(route.routeName)}
              focused={navigation.state.index === index}
              appState={appState[index].isDisplay}
            />
          );
        })}
      </View>
    );
  }

  navigationHandler = (name) => {
    const {navigation} = this.props;
    navigation.navigate(name);
  };
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
});

// const mapStateToProps = (state) => {
//   return {
//     appState: state.app.appState || true, // boolean
//   };
// };
export default CustomTabBar;
