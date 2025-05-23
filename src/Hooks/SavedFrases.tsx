import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar datos
export const saveData = async (nuevaFrase: string) => {
 try {
    const frasesGuardadas = await AsyncStorage.getItem('frases');
    const frasesArray = frasesGuardadas ? JSON.parse(frasesGuardadas) : [];
    frasesArray.push(nuevaFrase);
    await AsyncStorage.setItem('frases', JSON.stringify(frasesArray));
  } catch (e) {
    console.error('Error guardando la frase', e);
  }
};

// Leer datos
export const getFrases = async (): Promise<string[]> => {
  try {
    const frases = await AsyncStorage.getItem('frases');
    return frases ? JSON.parse(frases) : [];
  } catch (e) {
    console.error('Error obteniendo las frases', e);
    return [];
  }
};

export const deleteFrase = async (nuevasFrases: string[]) =>  {
  try{
    await AsyncStorage.setItem('frases', JSON.stringify(nuevasFrases));
  }catch(error){
    console.error('Error obteniendo las frases', error);
  }
}