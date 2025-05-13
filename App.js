import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Heloisa Melo Costa
        </Text>
      </View>

      <View>
        <Image
          source={require('./assets/naruto.jpg')} // Verifique se o arquivo realmente existe nessa pasta
          style={styles.imagem}
        />
      </View>

      <Text style={styles.text}>
        Estou no 3º Período de Análise e Desenvolvimento de Sistemas, tenho interesse em Desenvolvimento Web e Mobile, e estou aprendendo React Native.{"\n"}
        Estou gostando muito de aprender React Native, e espero me tornar uma desenvolvedora Full Stack.
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // Corrigido de "justify" para "center"
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'justifyCenter',
    fontWeight: 'bolder',
  },
  imagem: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 20,
  },

});
