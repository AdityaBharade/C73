import * as firebase from 'firebase';

require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyDEsgYyh40xlSnnXz9g2dXXSMDl4D4rIjE",
    authDomain: "wily-app-49a58.firebaseapp.com",
    projectId: "wily-app-49a58",
    storageBucket: "wily-app-49a58.appspot.com",
    messagingSenderId: "268262952349",
    appId: "1:268262952349:web:7c5a4f95958efd7d137374"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore()