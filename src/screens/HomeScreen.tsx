import { View, Text} from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

import { Button } from "../components/Button";


const HomeScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Button 
        title="Comenzar" 
        onPress={() => navigation.navigate('Form')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#01055f'
  },
  title: {
    fontSize: 24,
    color: "#ffff",
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default HomeScreen;