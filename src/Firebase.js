import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB44W290eT2UmCUS-Sc96e1Md8Ru-fxQx4",
  authDomain: "recipeapp-e304b.firebaseapp.com",
  databaseURL: "https://recipeapp-e304b-default-rtdb.firebaseio.com",
  projectId: "recipeapp-e304b",
  storageBucket: "recipeapp-e304b.appspot.com",
  messagingSenderId: "707709382036",
  appId: "1:707709382036:web:8d910632f451016fbfb381",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
