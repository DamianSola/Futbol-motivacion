import { TextInput, Text, View, StyleSheet } from 'react-native';

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'numeric';
};

export const Input = ({ 
  label, 
  value, 
  onChangeText, 
  keyboardType = 'default' 
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: "white"
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    color: "white",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});