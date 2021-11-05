import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home/index';
import Random from './views/Search/index';
import DBSearch from './views/DBSearch/index';
import Results from './views/Results/index';
import { Lato_400Regular, Lato_400Regular_Italic } from "@expo-google-fonts/lato";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

export default function App({ navigation }) {

	let [fontsLoaded] = useFonts({
		Lato_400Regular,
		Lato_400Regular_Italic
  });

  if (!fontsLoaded) {
	return <AppLoading />;
	}
	
		return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ title: '', headerBackTitleVisible: ''}}>
					<Stack.Screen name="Home" component={Home}
						options={{ headerTransparent: true }} />
					<Stack.Screen name="Random" component={Random}
						options={{ headerTransparent: true, headerTintColor: 'rgba(0, 0, 0, 0.8)' }}/>
					<Stack.Screen name="DBSearch" component={DBSearch} navigation={navigation}
						options={{headerTransparent: true, headerTintColor: '#EF6145'}}/>
					<Stack.Screen name="Results" component={Results} navigation={navigation}
						options={{ headerTransparent: true, headerTintColor: 'rgba(0, 0, 0, 0.8)' }}/>
				</Stack.Navigator>
			</NavigationContainer>
		)
	}
