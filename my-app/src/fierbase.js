import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCLzhe29tc5SSgzZv6svfNq2gU43jsuOb0",
  authDomain: "project-b8c8d.firebaseapp.com",
  projectId: "project-b8c8d",
  storageBucket: "project-b8c8d.appspot.com",
  messagingSenderId: "69898183556",
  appId: "1:69898183556:web:25e350384be8b25eaab3d1",
  measurementId: "G-1N7Z6LH02H",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
