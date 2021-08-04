import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

const [numero, setNumero] = useState(0)

function handleNumero(){
  const novo_numero = Math.floor(Math.random() * 1000);
  setNumero(novo_numero)
}

  return (
    <View style={styles.container}>
      <Text style={styles.numero}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero} style={styles.botao}>
          <Text> Gerar Numero</Text>
        </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numero: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  botao: {
    backgroundColor: '#ffff00',
    width: '70%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
});
