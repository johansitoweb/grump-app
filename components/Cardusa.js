import { Text, View, StyleSheet, Image } from 'react-native';

export default function Carduse() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        app sencilla vista de card 
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    </View>
  );
}