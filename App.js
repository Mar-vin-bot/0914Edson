import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img1.jpg";
import img3 from "./assets/img1.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Cards
        imagem={img1}
        titulo={"aspirador de pó"}
        descricao={"alo alodddd"}
        informacoes={"demais informações sobre item produto"} />

      <Cards
        imagem={img2}
        titulo={"celular"}
        descricao={"marciano"}
        informacoes={"demais informações sobre item produto"} />

      <Cards
        imagem={img3}
        titulo={"power bank"}
        descricao={"aqui quem fala é da terra"}
        informacoes={"demais informações sobre item produto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
