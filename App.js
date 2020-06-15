import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dash from './screen/dash'
import AddScreen from './screen/addItem'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={Dash} 
        />
        <Stack.Screen name="AddScreen" component={AddScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;