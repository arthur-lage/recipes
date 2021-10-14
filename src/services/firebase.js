import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBXngjQ7FiNCyKsmrk1dXWFbieZfCnlWc0",
  authDomain: "recipes-244c8.firebaseapp.com",
  projectId: "recipes-244c8",
  storageBucket: "recipes-244c8.appspot.com",
  messagingSenderId: "289511521195",
  appId: "1:289511521195:web:b9917d0a7f52cdf94330ee"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }