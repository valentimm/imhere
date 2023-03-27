import { Text, View } from 'react-native';
import { styles } from './styles';
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Segunda-feira, 27 de março de 2023</Text>
    </View>
  );
}