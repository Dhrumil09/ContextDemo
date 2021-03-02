import {Button, Text, View} from 'react-native';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import navContext from './Src/context/navContext';
import {useState} from 'react';
import {useEffect} from 'react';
import CustomTabbar from './CustomTabbar';
import {useContext} from 'react';
let s = true;
const Home = () => {
  const {isshow, setShow} = useContext(navContext);
  console.log("hey",isshow);
  return (
    <View>
      <Text>hii</Text>
      <Button onPress={() => setShow(!isshow)} title="change"></Button>
    </View>
  );
};
const YourLibrary = () => {
  return (
    <View>
      <Text>YourLibrary</Text>
    </View>
  );
};
const Search = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};
const Radio = () => {
  return (
    <View>
      <Text>Radio</Text>
    </View>
  );
};
const Browse = () => {
  return (
    <View>
      <Text>hiii Browse</Text>
    </View>
  );
};
const TabHome = createBottomTabNavigator(
  {
    Home: Home,
    Browse: Browse,
    Search: Search,
    Radio: Radio,
  },
  {
    tabBarComponent: CustomTabbar,
  },
);

const Est = createAppContainer(TabHome);
// export default Est;

const App = () => {
  const [isshow, setShow] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setIsShow(true), 3000);
  // }, []);
  return (
    <navContext.Provider value={{isshow, setShow}}>
      <Est />
    </navContext.Provider>
  );
};
export default App;
