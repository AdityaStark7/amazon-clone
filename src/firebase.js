// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAscq8vXU9WzNb2NRYTpMVwXYy1sPFkkqE",
    authDomain: "clone-f6f7d.firebaseapp.com",
    projectId: "clone-f6f7d",
    storageBucket: "clone-f6f7d.appspot.com",
    messagingSenderId: "847080265194",
    appId: "1:847080265194:web:5b51c1571ca31bbd524e93",
    measurementId: "G-B91Q7YTMB2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };