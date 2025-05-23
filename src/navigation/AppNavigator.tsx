import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Text ,StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import ResultScreen from '../screens/ResultScreen';

// importar screens

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  );
};
