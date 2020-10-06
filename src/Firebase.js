import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3LjgJqtA_PO_6iVmAUpZQuDEhlm3mbxw",
    authDomain: "clone-fb0e1.firebaseapp.com",
    databaseURL: "https://clone-fb0e1.firebaseio.com",
    projectId: "clone-fb0e1",
    storageBucket: "clone-fb0e1.appspot.com",
    messagingSenderId: "84482719023",
    appId: "1:84482719023:web:44cbcd69d86a0d9b60b5da",
    measurementId: "G-JJXHK2B6BS"

});

const auth = firebase.auth();

export{auth};
