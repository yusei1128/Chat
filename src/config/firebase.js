// import * as  firebase from 'firebase/app'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig  = {
    apiKey: "AIzaSyAusos5iCHNGgyI5gNF55TZ6a8Sm_5eJKM",
    // databaseURL: "https://chat-app-e3550-default-rtdb.firebaseio.com",
    authDomain: "chat-app-c5c37.firebaseapp.com",
    projectId: "chat-app-c5c37",
    storageBucket: "chat-app-c5c37.appspot.com",
    messagingSenderId: "209764710241",
    appId: "1:209764710241:web:6f972ca8502eb8aa8d3720"

}

firebase.initializeApp(firebaseConfig)

export default firebase