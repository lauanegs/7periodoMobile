import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

<Text style={styles.emailText}>{auth.currentUser?.email}</Text>

const handleLogout = () => {
  signOut(auth).then(() => {
    navigation.replace('Login');
  }).catch((error) => {
    console.error(error);
  });
};