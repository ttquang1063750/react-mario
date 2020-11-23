import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore


const config = {
    apiKey: "AIzaSyD6H5AdgRgE_o8ivIs0nrycbSUnp0Zhnzg",
    authDomain: "react-mario-4329c.firebaseapp.com",
    databaseURL: "https://react-mario-4329c.firebaseio.com",
    projectId: "react-mario-4329c",
    storageBucket: "react-mario-4329c.appspot.com",
    messagingSenderId: "75817992163",
    appId: "1:75817992163:web:52d6d95ef6d974c436aad6",
    measurementId: "G-L04BLQ5L9F"
};

// Initialize Firebase instance
firebase.initializeApp(config);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

export default firebase;
