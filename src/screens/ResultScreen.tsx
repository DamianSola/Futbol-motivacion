import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/Button';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;

type Props = {
  route: ResultScreenRouteProp;
};

const ResultScreen = ({ route }: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { response } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado:</Text>
      <Text style={styles.response}>{response}</Text>
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  response: {
    fontSize: 16,
    marginBottom: 30,
    lineHeight: 24,
  },
});
export default ResultScreen;