import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import ResultScreen from '../screens/ResultScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
// importar screens

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name='Home' component={HomeScreen}
         options={{
          title: 'Inicio',
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <MaterialIcons name="home" size={30} color="black" />
            </TouchableOpacity>
          ),
        }}/>
        <Stack.Screen name="Form" component={FormScreen} 
        options={{
          title: 'Generando promp',
        }}
        />
        <Stack.Screen name="Result" component={ResultScreen} 
         options={{
          title: 'Frase generada',
        }}/>
    </Stack.Navigator>
  );
};
