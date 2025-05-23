import { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { generateContent } from '../api/gemini';

const FormScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const prompt = `Crear un discurso motivacional para ${name}, de ${age} años, previo a un partido de futbol. La posicion de ${name} es ${position}. Que sea epico!!. Máximo 100 caracteres.que sean arengas bien de vestuario, usar frases epicas de peliculas para motivar`;
      const response = await generateContent(prompt);
      navigation.navigate('Result', { response });
    } catch (error) {
      console.error('Error al generar contenido:', error);
    return 'Hubo un error generando el contenido.';
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>A quien vas a motivar?</Text>
    <ScrollView contentContainerStyle={styles.formContainer}>
      <Input 
        label="Nombre" 
        value={name} 
        onChangeText={setName} 
        />
      <Input 
        label="Edad" 
        value={age} 
        onChangeText={setAge} 
        keyboardType="numeric"
        />
      <Input 
        label="Posición" 
        value={position} 
        onChangeText={setPosition} 
        />
      <Button 
        title={loading ? "Generando discurso..." : "Generar discurso"} 
        onPress={handleSubmit}
        disabled={loading || !name || !age || !position}
        />
    </ScrollView>
    <TouchableOpacity 
          style ={styles.boton}
          onPress={() => navigation.navigate('Form')}
        >
          <Text style={styles.startButtonText}>Discursos guardados 📁</Text>
        </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#670000",
    padding: 20,
  },
  title:{
    paddingTop: 20,
    color: "#fff",
    fontSize: 28,
    fontWeight: 'bold',
    margin: "auto"
  },

  formContainer: {
    flexGrow: 1,
    padding: 10,
  },
   boton:{
    backgroundColor: '#01055f',
    paddingVertical: 15,       
    paddingHorizontal: 30,     
    borderRadius: 20,          
    elevation: 5,              
    shadowColor: '#000',       
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 40
  },
  startButtonText:{
    color: '#FFFFFF', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default FormScreen;