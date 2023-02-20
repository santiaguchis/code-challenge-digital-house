import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import HomeScreen from 'src/features/screens/Home';
import ProductShowScreen from 'src/features/screens/ProductShow';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false
}

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ screenOptions }>
      <Stack.Screen
        name="Home"
        component={ HomeScreen }
      />
      <Stack.Screen
        name="ProductShow"
        component={ ProductShowScreen }
      />
    </Stack.Navigator>
  )
}
export { MainNavigator };