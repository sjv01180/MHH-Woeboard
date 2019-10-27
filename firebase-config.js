import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA1nBPWk7d_OXatfDkygsWboF8JtsmB4oA",
    authDomain: "friendly-chat-1e2a7.firebaseapp.com",
    databaseURL: "https://friendly-chat-1e2a7.firebaseio.com",
    projectId: "friendly-chat-1e2a7",
    storageBucket: "friendly-chat-1e2a7.appspot.com",
    messagingSenderId: "811587551078",
    appId: "1:811587551078:web:9b1435e508ef7aca1e92a7"
} 

firebase.initializeApp(config);

export default firebase;