import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBstziQvRFz76UaXRxv_HdjovwyR3W3dEA",
    authDomain: "clone-cb77c.firebaseapp.com",
    projectId: "clone-cb77c",
    storageBucket: "clone-cb77c.appspot.com",
    messagingSenderId: "572076418512",
    appId: "1:572076418512:web:021c8d154f1c4ac8ebc5d5",
    measurementId: "G-B03EB7VR26"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };