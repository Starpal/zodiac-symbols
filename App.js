import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home/index';
import DBSearch from './views/DBSearch/index';
import Results from './views/Results/index';
import AppLoading from "expo-app-loading";
import useFonts from './hooks/useFonts';

const Stack = createStackNavigator();

export default function App({ navigation }) {

	const [IsReady, SetIsReady] = useState(false)

	const LoadFonts = async () => {
    	await useFonts();
  	};

  	if (!IsReady) {
    	return (
     		<AppLoading
        		startAsync={LoadFonts}
        		onFinish={() => SetIsReady(true)}
        		onError={console.warn}
      		/>
    	);
  	}
	
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ title: '', headerBackTitleVisible: ''}}>
				<Stack.Screen name="Home" component={Home}
					options={{ headerTransparent: true }} />
				<Stack.Screen name="DBSearch" component={DBSearch} navigation={navigation}
					options={{headerTransparent: true, headerTintColor: 'rgb(222, 101, 111)'}}/>
				<Stack.Screen name="Results" component={Results} navigation={navigation}
					options={{ headerTransparent: true, headerTintColor: 'rgba(0, 0, 0, 0.8)' }}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
