import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAY6WBay1wwErVMyWhLf_Hc2VQXHd-W84E",
  authDomain: "biblioteca-e4fec.firebaseapp.com",
  projectId: "biblioteca-e4fec",
  storageBucket: "biblioteca-e4fec.appspot.com",
  messagingSenderId: "426010882216",
  appId: "1:426010882216:web:df1d2f0e7392e51fe4129d"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();