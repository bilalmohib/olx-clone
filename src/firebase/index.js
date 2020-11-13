import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDAelHByyhxwHlF7JIeCCGwL5HP622k5E8",
    authDomain: "fastsellat.firebaseapp.com",
    databaseURL: "https://fastsellat.firebaseio.com",
    projectId: "fastsellat",
    storageBucket: "fastsellat.appspot.com",
    messagingSenderId: "717565114992",
    appId: "1:717565114992:web:971b1dd5199c57b04812b5",
    measurementId: "G-0NRD11FNQZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const storage = firebase.storage();

  export {
      storage,
      firebase as default
  }