import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyBRIpmdWXiN1iSMQHdhvYI__mfPCkRSO1Q",
    authDomain: "ninja-chat-b8189.firebaseapp.com",
    projectId: "ninja-chat-b8189",
    storageBucket: "ninja-chat-b8189.appspot.com",
    messagingSenderId: "430037516323",
    appId: "1:430037516323:web:43dcb0ad98f55ae4db7196"
  };

  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()
