// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyCg8j8e55fRikFmnLR3xiBYVG3IMEZuda8',
  authDomain: 'test-f1186.firebaseapp.com',
  projectId: 'test-f1186',
  storageBucket: 'test-f1186.firebasestorage.app',
  messagingSenderId: '179315471324',
  appId: '1:179315471324:web:6958170be6ba465cb99519',
  measurementId: 'G-9WVZKYXL7H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
