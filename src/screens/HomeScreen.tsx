import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground , TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; // Asegúrate de tener este import si usas TypeScript
import { RootStackParamList } from '../types';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
   
    <ImageBackground
      source={require('../../assets/futbol-player.png')} 
      style={styles.backgroundImage}                  
      resizeMode="cover"                              
    >
     
      <View style={styles.contentContainer}> 
        <Text style={styles.title}>¡Bienvenido a Futbol motivacion!</Text>
        <Text style={styles.subTitle}>¡Prepara la arenga perfecta para tus jugadores!</Text>
        <TouchableOpacity 
          style ={styles.boton}
          onPress={() => navigation.navigate('Form')}
        >
          <Text style={styles.startButtonText}>Comenzar ✨</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
 
  backgroundImage: {
    flex: 1,          
    width: '100%',     
    height: '100%',    
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  
  contentContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  subTitle:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  boton:{
    backgroundColor: '#670000',
    paddingVertical: 15,       
    paddingHorizontal: 40,     
    borderRadius: 30,          
    elevation: 5,              
    shadowColor: '#000',       
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButtonText:{
    color: '#FFFFFF', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default HomeScreen;