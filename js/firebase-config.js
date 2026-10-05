import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPK0fiW7CNV6QbxcesZjdG52N_fgFVyno",
  authDomain: "billing-bf43f.firebaseapp.com",
  projectId: "billing-bf43f",
  storageBucket: "billing-bf43f.firebasestorage.app",
  messagingSenderId: "317975290675",
  appId: "1:317975290675:web:ef39ff5454d7dcf0649446",
  measurementId: "G-N2WD8J0P8C"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(firebaseApp);

export { firebaseApp, firestoreDb };
