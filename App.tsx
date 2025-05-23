import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AppNavigator} from "./src/navigation/AppNavigator";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenidos!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00025d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: "#fff",
  }
});
