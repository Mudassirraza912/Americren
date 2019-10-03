import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCVmHvuuAUemB_HH4EUHuTEnIPbRaskwe4",
    authDomain: "my-potfolio.firebaseapp.com",
    databaseURL: "https://my-potfolio.firebaseio.com",
    projectId: "my-potfolio",
    storageBucket: "my-potfolio.appspot.com",
    messagingSenderId: "274428008832",
    appId: "1:274428008832:web:420d11b4bde844c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;