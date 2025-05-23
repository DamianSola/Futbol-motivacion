import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export const Button = ({ title, onPress, disabled = false }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, disabled && styles.disabled]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#01055f',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
        borderBottomColor: '#c0bebe',

  },
  disabled: {
    backgroundColor: '#c0bebe',
    color: "#f7f4f4",
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
  },
});