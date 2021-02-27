// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyBGgXLonS2hmW7hh2c8ngqvr3zHYICFFC4",
    authDomain: "portfolio-dashielashie.firebaseapp.com",
    projectId: "portfolio-dashielashie",
    storageBucket: "portfolio-dashielashie.appspot.com",
    messagingSenderId: "61164260343",
    appId: "1:61164260343:web:bd418af0a9a19ac6683cf2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);