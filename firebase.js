import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA0XKJKtQh71SvWU1g2PsIh3oI3MOdBe_8",
    authDomain: "fir-1575e.firebaseapp.com",
    projectId: "fir-1575e",
    storageBucket: "fir-1575e.appspot.com",
    messagingSenderId: "567597934362",
    appId: "1:567597934362:web:20608f094bca3d59446ea3"
  };


  const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig):
  firebase.app();
  const db=app.firestore();
  export default db;