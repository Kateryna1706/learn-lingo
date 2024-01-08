import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBoI8rA1kyECSFK7_TXVbYYk8NObpKgv58',
  authDomain: 'learnlingo-1e40c.firebaseapp.com',
  projectId: 'learnlingo-1e40c',
  storageBucket: 'learnlingo-1e40c.appspot.com',
  messagingSenderId: '432680839920',
  appId: '1:432680839920:web:44817480240134ef2af035',
  measurementId: 'G-G4W4VJRP81',
  databaseURL:
    'https://learnlingo-1e40c-default-rtdb.europe-west1.firebasedatabase.app',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
