// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4eoMHMww5dMgdJq62n9N-qnOK4hRt920",
  authDomain: "ecommerse-8beb7.firebaseapp.com",
  projectId: "ecommerse-8beb7",
  storageBucket: "ecommerse-8beb7.appspot.com",
  messagingSenderId: "43455465402",
  appId: "1:43455465402:web:25db58c0e87c8675c1bf83",
  measurementId: "G-1WYSN6BNGY",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app) // Define the auth object

export {auth, app, getFirestore} // Export auth along with other necessary objects
