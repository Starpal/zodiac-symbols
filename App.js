import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home/index';
import Random from './components/Search/index';
import DBSearch from './components/DBSearch/index';
import Results from './components/Results/index';

const Stack = createStackNavigator();

export default class App extends Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ title: '', headerBackTitleVisible: ''}}>
					<Stack.Screen name="Home" component={Home}
						options={{ headerTransparent: true }} />
					<Stack.Screen name="Random" component={Random}
						options={{ headerTransparent: true, headerTintColor: 'rgba(0, 0, 0, 0.8)' }}/>
					<Stack.Screen name="DBSearch" component={DBSearch} navigation={this.props.navigation}
						options={{
							headerTransparent: true, headerTintColor: '#EF6145'}}/>
					<Stack.Screen name="Results" component={Results} navigation={this.props.navigation}
						options={{ headerTransparent: true, headerTintColor: 'rgba(0, 0, 0, 0.8)' }}/>
				</Stack.Navigator>
			</NavigationContainer>
		)
	}
}
