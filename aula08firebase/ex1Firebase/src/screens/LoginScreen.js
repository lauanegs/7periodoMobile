import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [modalVisible, setModalVisible] = useState(false);
const [modalMessage, setModalMessage] = useState('');

const handleLogin = async () => {
  if (email === '' || password === '') {
    setModalMessage('Por favor, preencha todos os campos.');
    setModalVisible(true);
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigation.replace('Home');
  } catch (error) {
    if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      setModalMessage('Usuário ou senha incorretos. Verifique seus dados.');
    } else {
      setModalMessage('Erro ao acessar: ' + error.message);
    }
    setModalVisible(true);
  }
};