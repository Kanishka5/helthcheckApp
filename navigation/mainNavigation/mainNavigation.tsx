import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import Home from '../../screens/Home/home';
import NewEntry from '../../screens/NewEntry/newEntry';
import History from '../../screens/History/history';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="New Entry" component={NewEntry} />
        <Tab.Screen name="History" component={History} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
