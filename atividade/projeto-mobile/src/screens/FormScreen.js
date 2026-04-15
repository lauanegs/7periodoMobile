import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export default function FormScreen({ navigation }) {
  const [carro, setCarro] = useState('');
  const [cliente, setCliente] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');

  const handleSave = async () => {
    if (!carro || !cliente || !valor || !data) {
      Alert.alert("Erro", "Preencha todos os campos do aluguel.");
      return;
    }

    try {
      await addDoc(collection(db, 'alugueis'), {
        carro,
        cliente,
        valor: parseFloat(valor),
        data,
      });
      Alert.alert("Sucesso", "Aluguel registrado!");
      navigation.navigate('List');
    } catch (error) {
      Alert.alert("Erro", "Falha ao salvar no Firestore.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Carro:</Text>
      <TextInput style={styles.input} value={carro} onChangeText={setCarro} placeholder="Ex: Fusca" />

      <Text style={styles.label}>Nome do Cliente:</Text>
      <TextInput style={styles.input} value={cliente} onChangeText={setCliente} placeholder="Nome do locatário" />

      <Text style={styles.label}>Valor do Aluguel:</Text>
      <TextInput style={styles.input} value={valor} onChangeText={setValor} placeholder="R$" keyboardType="numeric" />

      <Text style={styles.label}>Data do Aluguel:</Text>
      <TextInput style={styles.input} value={data} onChangeText={setData} placeholder="DD/MM/AAAA" />

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveBtnText}>Registrar Aluguel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontWeight: 'bold', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 15 },
  saveBtn: { backgroundColor: '#28a745', padding: 15, borderRadius: 8, alignItems: 'center' },
  saveBtnText: { color: '#fff', fontWeight: 'bold' }
});