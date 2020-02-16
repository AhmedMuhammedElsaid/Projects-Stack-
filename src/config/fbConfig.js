import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDMup6LzNMHUA5Rr4_XLywOGVvDBP9DGak",
    authDomain: "react-redux-app-dc1a7.firebaseapp.com",
    databaseURL: "https://react-redux-app-dc1a7.firebaseio.com",
    projectId: "react-redux-app-dc1a7",
    storageBucket: "react-redux-app-dc1a7.appspot.com",
    messagingSenderId: "223905401800",
    appId: "1:223905401800:web:d5689421eca1501819cefd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  
  export default firebase
