import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './Components/HomeScreen';
import MenuScreen from './Components/MenuScreen';
import DishesDessertsScreen from './Components/DishesDessertsScreen';
import DrinksScreen from './Components/DrinksScreen';
import AdditionsScreen from './Components/AdditionsScreen';
// import SplashScreen from './Components/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Menu" component={MenuScreen} />
					<Stack.Screen name="DishesDesserts" component={DishesDessertsScreen} />
					<Stack.Screen name="Drinks" component={DrinksScreen} />
					<Stack.Screen name="Additions" component={AdditionsScreen} />
				</Stack.Navigator>
			  {/* <SplashScreen></SplashScreen>;   */}
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
