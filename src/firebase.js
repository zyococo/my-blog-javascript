import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMTrRzdf8jC2A27IKHl4xDmFNq-Pd1oOc",
  authDomain: "blog-8a021.firebaseapp.com",
  projectId: "blog-8a021",
  storageBucket: "blog-8a021.appspot.com",
  messagingSenderId: "716487805417",
  appId: "1:716487805417:web:b2aae2ebec88892c9e2378",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
