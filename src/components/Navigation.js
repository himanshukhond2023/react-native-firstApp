import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ComponentsScreen from "../screens/ComponentsScreen";
import ExerciseScreen from '../screens/ExerciseScreen';
import ListExerciseScreen from "../screens/ListExerciseScreen";
import ListScreen from "../screens/ListScreen";
import ImageScreen from '../screens/ImageScreen';
import CounterScreen from '../screens/CounterScreen';
import ColorScreen from '../screens/ColorScreen';
import SquareColorScreen from '../screens/SquareColorScreen';
import TextScreen from '../screens/TextScreen';
import BoxScreen from '../screens/BoxScreen';
import MixPanelScreen from '../screens/MixPanelScreen';
import DateScreen from '../screens/DateScreen';

import UseStateScreen from '../screens/UseStateScreen';
import UseEffectScreen from '../screens/UseEffectScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        // <Text>Hello</Text>
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                //   options={{title: 'Welcome'}}
                />
                <Stack.Screen name="ComponentsScreen" component={ComponentsScreen} />
                <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
                <Stack.Screen name="ListScreen" component={ListScreen} />
                <Stack.Screen name="ListExerciseScreen" component={ListExerciseScreen} />
                <Stack.Screen name="ImageScreen" component={ImageScreen} />
                <Stack.Screen name="CounterScreen" component={CounterScreen} />
                <Stack.Screen name="ColorScreen" component={ColorScreen} />
                <Stack.Screen name="SquareColorScreen" component={SquareColorScreen} />
                <Stack.Screen name="TextScreen" component={TextScreen} />
                <Stack.Screen name="BoxScreen" component={BoxScreen} />
                <Stack.Screen name="MixPanelScreen" component={MixPanelScreen} />
                <Stack.Screen name="DateScreen" component={DateScreen} /> */}

                {/* <Stack.Screen name="UseStateScreen" component={UseStateScreen} /> */}
                <Stack.Screen name="UseEffectScreen" component={UseEffectScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;