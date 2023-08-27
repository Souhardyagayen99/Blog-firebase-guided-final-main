// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDCbKbDbgl9Qby9qmBuIy7j1d1jA1sC664",
//   authDomain: "blog-new-911fc.firebaseapp.com",
//   projectId: "blog-new-911fc",
//   storageBucket: "blog-new-911fc.appspot.com",
//   messagingSenderId: "1062228625402",
//   appId: "1:1062228625402:web:82462e5cf2c899a833c643"
// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
//Export the reference to be used in other files
//export const db = getFirestore(app);

/**const firebaseConfig = {
  apiKey: "*********************************",
  authDomain: "*******************************",
  projectId: "***********************",
  storageBucket: "******************************",
  messagingSenderId: "******************",
  appId: "************************"
}; */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIx6iqK8gBjyBj-RZgMTKfxYO0Yf_1Z8o",
  authDomain: "blogging-app-71877.firebaseapp.com",
  projectId: "blogging-app-71877",
  storageBucket: "blogging-app-71877.appspot.com",
  messagingSenderId: "800453414515",
  appId: "1:800453414515:web:0f7365875d9d2d02292406",
  measurementId: "G-X4M964MRXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
