import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyABB3TtsSsWyoHdKgQENv-xzU16Bn1DCH0",
  authDomain: "portfolio-app-22551.firebaseapp.com",
  projectId: "portfolio-app-22551",
  storageBucket: "portfolio-app-22551.firebasestorage.app",
  messagingSenderId: "443008086692",
  appId: "1:443008086692:web:c27eec0c5ae35ab307ec31",
  measurementId: "G-FXDCSJ7YY7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
