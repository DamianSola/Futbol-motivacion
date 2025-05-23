import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import {saveData} from '../Hooks/SavedFrases'

type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;

type Props = {
  route: ResultScreenRouteProp;
};

const images = [
 {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ61dh6Doi6FvpZViKYY-TlYMnIo2wx69S9g&s"},
 {uri: "https://cuidateplus.marca.com/sites/default/files/styles/natural/public/cms/concentracion-en-el-deporte.jpg.webp?itok=eUavq_m1"},
{uri: "https://i.pinimg.com/236x/2a/0a/d5/2a0ad54a5ae75820851f0cf55fbf58a4.jpg"},
{uri: 'https://pbs.twimg.com/media/FjdrRfcXoAE4Fzw.jpg'},
{uri: "https://www.mundodeportivo.com/us/files/image_449_465/uploads/2022/04/12/625618e6b2794.jpeg"},
{uri: "https://estaticos-cdn.prensaiberica.es/clip/258fedbc-99e5-4dab-a7e2-afdbed1058d2_source-aspect-ratio_default_0.jpg"}
];


const ResultScreen = ({ route }: Props) => {
 const [image, setImage] = useState(images[Math.floor(Math.random() * images.length)]);


useEffect(() => {
   setImage(images[Math.floor(Math.random() * images.length)]);
})


  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { response } = route.params;

  const handlePress = async() => {
    try{
      await saveData(response)
      navigation.navigate('Home')

    }catch(error){
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
       <Image source={image} style={styles.image} />
      <View style={styles.cardContainer}>
      <Text style={styles.text}>{response}</Text>
      </View>
      <View style={styles.buttonContainer}>
      <Button 
        title="Ir a Home" 
        onPress={() => navigation.navigate('Home')} 
      />
     <TouchableOpacity 
               style ={styles.button}
               onPress={() => handlePress()}
             >
               <Text style={styles.startButtonText}>Guardar Frase</Text>
             </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#670000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',  // Coloca los elementos en fila
    justifyContent: 'space-between',  // Distribución equitativa
    gap: 10,  // Espacio entre los botones
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: "#D32F2F",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
    width: "90%",
    marginBottom: 20
  },
  image: {
    width: "90%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 12,
    marginBottom: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  startButtonText:{
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  button:{
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: "transparent",
    alignItems: "center"
  }
});

export default ResultScreen;