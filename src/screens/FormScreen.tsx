import { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
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
      const prompt = `Dame un análisis de jugador para ${name}, de ${age} años, que juega como ${position}. Máximo 150 caracteres.`;
      const response = await generateContent(prompt);
      navigation.navigate('Result', { response });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>A quien vas a motivar?</Text>
    <ScrollView style={styles.formContainer}>
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
        title={loading ? "Procesando..." : "Consultar"} 
        onPress={handleSubmit}
        disabled={loading || !name || !age || !position}
        />
    </ScrollView>
        </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#670000",
        padding: 20,
    },
    title:{
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold',
        margin: "auto"
    },

  formContainer: {
    flexGrow: 1,
    padding: 10,
  },
});

export default FormScreen;