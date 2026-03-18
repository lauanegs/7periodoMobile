import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Counter from './Counter';
import Greeting from './Greeting';

export default function Componente() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Exemplo de Componente
      </Text>

      <Greeting name="Maria" />
      <Greeting name="João" />

      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});