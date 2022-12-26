// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD1BNiLyBftW2FgMPHMtxVT8Pvw2F1B8j8',
  authDomain: 'master-portfolio-38361.firebaseapp.com',
  projectId: 'master-portfolio-38361',
  storageBucket: 'master-portfolio-38361.appspot.com',
  messagingSenderId: '977972240323',
  appId: '1:977972240323:web:223d9f8e35d75ce082e776',
  measurementId: 'G-9EYCMFT5B3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
