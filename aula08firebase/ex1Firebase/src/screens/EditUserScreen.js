import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

const { userData } = route.params;
const [name, setName] = useState(userData.name);
const [birthDate, setBirthDate] = useState(userData.birthDate);

const handleUpdate = async () => {
  if (!name || !birthDate) {
    Alert.alert("Erro", "Todos os campos devem ser preenchidos.");
    return;
  }

  try {
    const userRef = doc(db, 'users', userData.id);

    await updateDoc(userRef, {
      name: name,
      birthDate: birthDate
    });

    Alert.alert("Sucesso", "Dados de perfil atualizados com sucesso!");
    navigation.goBack();
  } catch (error) {
    console.error(error);
    Alert.alert("Erro", "Não foi possível atualizar os dados no banco de dados.");
  }
};