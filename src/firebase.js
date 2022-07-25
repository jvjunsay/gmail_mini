import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHzVFSzsb-I0eWCEKmMNHVc0Yp2TawkMI',
  authDomain: 'clone-d9b7a.firebaseapp.com',
  projectId: 'clone-d9b7a',
  storageBucket: 'clone-d9b7a.appspot.com',
  messagingSenderId: '315738168669',
  appId: '1:315738168669:web:bfcbd52ff20ce0d0ac1cb4'
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
