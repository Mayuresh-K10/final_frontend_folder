
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAcRg5OSMX_jQvpOmH0KZi35Jtmb9FYfZA",
  authDomain: "collegecue-910d0.firebaseapp.com",
  projectId: "collegecue-910d0",
  storageBucket: "collegecue-910d0.appspot.com",
  messagingSenderId: "768407424665",
  appId: "1:768407424665:web:827cc83833321ea37cf208",
  measurementId: "G-GGB10TT0M4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();