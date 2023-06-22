// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ480jCfwBYv7gFMdGqK3_dtdebtWrTUo",
  authDomain: "psupuj2.firebaseapp.com",
  databaseURL: "https://psupuj2-default-rtdb.firebaseio.com",
  projectId: "psupuj2",
  storageBucket: "psupuj2.appspot.com",
  messagingSenderId: "651834639087",
  appId: "1:651834639087:web:9a48a345cd9a1abc3d511a",
  measurementId: "G-J9GV6NBZRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);