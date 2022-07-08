// Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries\

  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD6qddhasrt9C5rYq8bU0N24Tn0zu_CmH8",
    authDomain: "login-faf50.firebaseapp.com",
    projectId: "login-faf50",
    storageBucket: "login-faf50.appspot.com",
    messagingSenderId: "213831289728",
    appId: "1:213831289728:web:5bf73b0858c0b251c48f65"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;