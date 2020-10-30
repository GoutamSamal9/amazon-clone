import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA9J3GANvETNRrx4iZeZ8_iy6jGuQALY7Y",
  authDomain: "clone-5e9ab.firebaseapp.com",
  databaseURL: "https://clone-5e9ab.firebaseio.com",
  projectId: "clone-5e9ab",
  storageBucket: "clone-5e9ab.appspot.com",
  messagingSenderId: "25160864890",
  appId: "1:25160864890:web:1ff80881e1b545971bd7c3",
  measurementId: "G-W8N5FJTT6K",
});

const auth = firebase.auth();
export { auth };
