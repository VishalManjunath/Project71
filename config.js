import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 apiKey: "AIzaSyAnjzMO7GILZLNAYRrtQ7n5XcCbrRzxaIs",
  authDomain: "complaint-forum-2c96b.firebaseapp.com",
  projectId: "complaint-forum-2c96b",
  storageBucket: "complaint-forum-2c96b.appspot.com",
  messagingSenderId: "1036735851292",
  appId: "1:1036735851292:web:0f1ca78ac2706604aba8d9"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

