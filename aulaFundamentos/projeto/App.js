import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Componente from './components/Componente';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          
          <View style={styles.initial}>
            <Componente />
          </View>

          <View style={styles.middle}>
            <Greeting name="Miguel" />
            <Greeting name="Gabriel" />
            <Greeting name="Rafael" />
          </View>

          <View style={styles.end}>
            <Counter />
          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#DAFFF7',
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#C6CFFF',
  },
  initial: {
    alignItems: 'center',
  },
  middle: {
    alignItems: 'center',
  },
  end: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});