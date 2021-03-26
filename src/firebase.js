import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCISsk6gYrRsu2p7xleUdTso8kEdcoRZQI",
  authDomain: "efastify.firebaseapp.com",
  projectId: "efastify",
  storageBucket: "efastify.appspot.com",
  messagingSenderId: "802756550378",
  appId: "1:802756550378:web:af6a795b2f56beeda98193",
  measurementId: "G-XT2NVL9HWT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
