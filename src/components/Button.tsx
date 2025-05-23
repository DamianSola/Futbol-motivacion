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
      <Text style={[styles.text, disabled && styles.disabledText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#01055f',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  disabled: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#c0bebe',

  },
  disabledText:{
     color: "#c0bebe",
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
  },
});