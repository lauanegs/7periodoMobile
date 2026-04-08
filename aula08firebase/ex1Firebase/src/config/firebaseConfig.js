import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCldbmP3PGs7CYFF3yztzdrcjuzZDX2KvE",
  authDomain: "unipam-lauane-app.firebaseapp.com",
  projectId: "unipam-lauane-app",
  storageBucket: "unipam-lauane-app.firebasestorage.app",
  messagingSenderId: "376379379208",
  appId: "1:376379379208:web:c820d8cd33f8601f908bbd",
  measurementId: "G-F828WTMQXW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);