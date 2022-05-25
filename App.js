import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './Components/HomeScreen';
import MenuScreen from './Components/MenuScreen';
import SplashScreen from './Components/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Menu" component={MenuScreen} />
				</Stack.Navigator>
			 {/* <SplashScreen></SplashScreen>;  */}
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
