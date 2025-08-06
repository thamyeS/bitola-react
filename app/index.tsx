import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button,KeyboardAvoidingView, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a16ed1ff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    color: "white"
  },
text:{
  fontSize:16,
  color:"#333"
},
  input: {
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
     backgroundColor: "white"
  }
});

export default function Index() {
  const [distanciaMetros, setDistanciaMetros] = useState("");
  const [correnteAmperes, setCorrenteAmperes] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  function calcular() {
    const distancia = parseFloat(distanciaMetros);
    const corrente = parseFloat(correnteAmperes);

    const bitola110 = (2 * corrente * distancia) / 294.64;
    const bitola220 = (2 * corrente * distancia) / 510.4;

    setResultado(`Bitola 110: ${bitola110.toFixed(2)} mm², Bitola 220: ${bitola220.toFixed(2)} mm²`);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Calcular Bitola</Text>
      <TextInput
        style={styles.input}
        placeholder="Distância em metros"
        value={distanciaMetros}
        onChangeText={setDistanciaMetros}
      />
      <TextInput
        style={styles.input}
        placeholder="Corrente em Amperes"
        value={correnteAmperes}
        onChangeText={setCorrenteAmperes}
      />
      <Button title="Calcular" onPress={calcular} />
      {resultado && (
        <Text style={styles.text}>{resultado}</Text>
      )}
    </KeyboardAvoidingView>
  );
}