// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0zaQ9ZTuEzNwG48m1h9ufzP0OfVxgiN8",
  authDomain: "bookworms-3b95c.firebaseapp.com",
  projectId: "bookworms-3b95c",
  storageBucket: "bookworms-3b95c.appspot.com",
  messagingSenderId: "609818811004",
  appId: "1:609818811004:web:b6022eb117ab35fbe287f9",
  measurementId: "G-8X01LQJK25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };