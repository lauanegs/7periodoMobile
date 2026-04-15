import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';

export default function ListScreen({ navigation }) {
  const [alugueis, setAlugueis] = useState([]);

  const fetchAlugueis = async () => {
    const querySnapshot = await getDocs(collection(db, 'alugueis'));
    const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setAlugueis(list);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchAlugueis();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={alugueis}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.carName}>{item.carro}</Text>
            <Text>Cliente: {item.cliente}</Text>
            <Text>Valor: R$ {item.valor}</Text>
            <Text>Data: {item.data}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('Form')}>
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10, elevation: 2 },
  carName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  fab: { position: 'absolute', right: 20, bottom: 20, backgroundColor: '#007bff', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', elevation: 5 }
});