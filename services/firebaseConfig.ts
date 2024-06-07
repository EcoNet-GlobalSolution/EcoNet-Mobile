import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiigsRkEVmqNPgbRWXaSKp1rFB8FiQ-gs",
  authDomain: "econet-6674e.firebaseapp.com",
  projectId: "econet-6674e",
  storageBucket: "econet-6674e.appspot.com",
  messagingSenderId: "845690051629",
  appId: "1:845690051629:web:bc3040e14dc11350adaca4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);