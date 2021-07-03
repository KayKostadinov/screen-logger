import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBNg6zC22X6A-9_ikj-yZoy6UukMb9K5tQ",
    authDomain: "where-was-i-26251.firebaseapp.com",
    projectId: "where-was-i-26251",
    storageBucket: "where-was-i-26251.appspot.com",
    messagingSenderId: "710671963920",
    appId: "1:710671963920:web:cf447632f2e4382961b795"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.FieldValue.serverTimestamp


export {projectFirestore, projectAuth, timestamp}