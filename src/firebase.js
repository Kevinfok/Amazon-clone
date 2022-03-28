// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA3jIm30fcZF2jEkQpN_jbYxSPyYZtV1Xg",
    authDomain: "clone-app-25a91.firebaseapp.com",
    projectId: "clone-app-25a91",
    storageBucket: "clone-app-25a91.appspot.com",
    messagingSenderId: "596172266119",
    appId: "1:596172266119:web:c423e16e7c6e96df627622",
    measurementId: "G-44CSK4WJKP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };