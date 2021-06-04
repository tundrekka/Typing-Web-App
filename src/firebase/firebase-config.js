import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
   apiKey: 'AIzaSyAu8R2dliBO2nQ3pc5MvX0to1k8t2n7gtQ',
   authDomain: 'react-practices-b915b.firebaseapp.com',
   databaseURL: 'https://react-practices-b915b-default-rtdb.firebaseio.com',
   projectId: 'react-practices-b915b',
   storageBucket: 'react-practices-b915b.appspot.com',
   messagingSenderId: '350501490135',
   appId: '1:350501490135:web:c830a5bc1321bd4b22cf92',
   measurementId: 'G-L53B3RPBQG'
 };
// Initialize Firebase
firebase.initializeApp( firebaseConfig );

const db = firebase.firestore();

// const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { db, firebase }
