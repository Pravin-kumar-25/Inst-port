// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9y4iuxbjpfpcZ6pULNSxErg2MxIvHAzE",
  authDomain: "postie-5b437.firebaseapp.com",
  projectId: "postie-5b437",
  storageBucket: "postie-5b437.appspot.com",
  messagingSenderId: "1095193793509",
  appId: "1:1095193793509:web:d6e834bd1c7619869cd50c",
  measurementId: "G-3S95HW5GBK"
};

// Initialize Firebase
if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;