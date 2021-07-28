import firebase from "firebase/app"
var firebaseConfig = {
    apiKey: "AIzaSyArz0FXPEGYi3AfcAg9H33bYyl1zphVmTU",
    authDomain: "forja-vacunacion-8dc69.firebaseapp.com",
    databaseURL: "https://forja-vacunacion-8dc69-default-rtdb.firebaseio.com",
    projectId: "forja-vacunacion-8dc69",
    storageBucket: "forja-vacunacion-8dc69.appspot.com",
    messagingSenderId: "908900631114",
    appId: "1:908900631114:web:4c967eee2745ae151adcb3",
    measurementId: "G-LB7K3RS6ME"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();