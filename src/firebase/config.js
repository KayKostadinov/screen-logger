import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA8y_3LnbOoq4BybEwFT2huM97k69ShUAw",
    authDomain: "screen-logger.firebaseapp.com",
    projectId: "screen-logger",
    storageBucket: "screen-logger.appspot.com",
    messagingSenderId: "777053202328",
    appId: "1:777053202328:web:e94926198e4d16a84deded"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.FieldValue.serverTimestamp


export { projectFirestore, projectAuth, timestamp }