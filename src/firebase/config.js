import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDgQptkRcfPxLTPp6OxCFLIrg6hyC5XLX4",
    authDomain: "rihea-311e9.firebaseapp.com",
    projectId: "rihea-311e9",
    storageBucket: "rihea-311e9.appspot.com",
    messagingSenderId: "1002576826080",
    appId: "1:1002576826080:web:f0f63cbf2f5055eef3ca85",
    measurementId: "G-YT5Y477QQZ"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();

  export {db};