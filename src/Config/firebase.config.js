// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjzvpaB2zDeVeUIb2DC3Wd2zl6NlXURQ8",
  authDomain: "stepware-f5288.firebaseapp.com",
  projectId: "stepware-f5288",
  storageBucket: "stepware-f5288.appspot.com",
  messagingSenderId: "115870754670",
  appId: "1:115870754670:web:71bb9221fdd9f8e664037f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth