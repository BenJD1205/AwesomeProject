
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  wrapper, 
} from './App.styles';
import { ScreenFlower, ScreenFlowerDetails, ScreenFlowerTypes } from './screens/Flower';


const Stack = createNativeStackNavigator();

export default function App() {

  return (<>
    <NavigationContainer style={wrapper}>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="ScreenFlowerTypes" component={ScreenFlowerTypes} />
          <Stack.Screen name="ScreenFlower" component={ScreenFlower} />
          <Stack.Screen name="ScreenFlowerDetails" component={ScreenFlowerDetails} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  </>);
}



