import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyC28akpj6V4pH_c-8FVgm-wch-W6Wf5RA8",
  authDomain: "movie-project2288.firebaseapp.com",
  databaseURL: "https://movie-project2288.firebaseio.com",
  projectId: "movie-project2288",
  storageBucket: "movie-project2288.appspot.com",
  messagingSenderId: "944998484076",
  appId: "1:944998484076:web:bc22e419d4e27397843049",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

export { db, auth };
