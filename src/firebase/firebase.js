import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA09CvNS68qR3rlzwfL-0XaPou2iWCymo",
  authDomain: "task-management-system-323ab.firebaseapp.com",
  projectId: "task-management-system-323ab",
  storageBucket: "task-management-system-323ab.firebasestorage.app",
  messagingSenderId: "835092653913",
  appId: "1:835092653913:web:10b8243d2c3c60769e0e48",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;