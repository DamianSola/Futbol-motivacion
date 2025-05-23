import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity  } from 'react-native';
import { getFrases, deleteFrase } from '../Hooks/SavedFrases';

const SavedScreen = () => {

  const [frases, setFrases] = useState<string[]>([]);

   const eliminarFrase = async (indexAEliminar: number) => {
    const nuevasFrases = frases.filter((_, index) => index !== indexAEliminar);
    await deleteFrase(nuevasFrases)
    setFrases(nuevasFrases);
    
  };

  useEffect(() => {
    const cargarFrases = async () => {
      const data = await getFrases();
      setFrases(data);
    };
    cargarFrases();
  }, []);

  return (
    <View style= {styles.container}>
      <Text style= {styles.title}>Frases guardadas</Text>
        {frases.map((frase, index) => (
       <View style={styles.FraseContaner} key={index.toString()}>
          <TouchableOpacity onPress={() => eliminarFrase(index)}>
            <Text style={styles.eliminar}>✖</Text>
          </TouchableOpacity>
          <Text  style={styles.text}>
            {frase}
          </Text>
      </View>
        ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#01055f',
  },
  FraseContaner:{
    backgroundColor: "#670000",
    paddingHorizontal: 5,
    borderRadius: 20,
    margin: 10,
    flexDirection: 'column'
  },
  title: {
    color: "white",
    fontSize: 24,
    padding: 10,
    fontWeight: 'bold'
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    fontStyle: 'italic',
    paddingHorizontal: 10,
  },

  eliminar: {
    fontSize: 18,
    color: 'white',
    paddingTop: 10,
    paddingRight: 10,
    textAlign: "right"
  }
})
export default SavedScreen;