import { View, Text, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;

type Props = {
  route: ResultScreenRouteProp;
};

const images = [
 {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ61dh6Doi6FvpZViKYY-TlYMnIo2wx69S9g&s"},
 {uri: "https://cuidateplus.marca.com/sites/default/files/styles/natural/public/cms/concentracion-en-el-deporte.jpg.webp?itok=eUavq_m1"},
{uri: "https://www.cultura.gob.ar/media/uploads/pareto-telam.jpg"}
];


const ResultScreen = ({ route }: Props) => {
 const [image, setImage] = useState(images[Math.floor(Math.random() * images.length)]);


useEffect(() => {
   setImage(images[Math.floor(Math.random() * images.length)]);
})


  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { response } = route.params;

  return (
    <View style={styles.container}>
       <Image source={image} style={styles.image} />
      <View style={styles.cardContainer}>
      <Text style={styles.text}>{'"' + response + '"'}</Text>
      </View>
      <Button 
        title="Volver al inicio" 
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#670000'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: "#D32F2F", 
    margin: 'auto',
    padding: 20, 
    borderRadius: 10, 
    alignItems: "center", 
    justifyContent: "center", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6, 
  },
  image: {
    width: 350,
    height: 250,
    margin: "auto",
    resizeMode: "cover",
    borderRadius: 10,
  },
   text: {
    color: "#FFF", 
    fontSize: 18, 
    fontWeight: "bold", 
    textAlign: "center",
  }

});
export default ResultScreen;