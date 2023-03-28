import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6urRz6Nrxxp6wu3SJvNSwDUDpCp8GcCU",
  authDomain: "myshoppingplace-bd705.firebaseapp.com",
  databaseURL: "https://myshoppingplace-bd705-default-rtdb.firebaseio.com/",
  projectId: "myshoppingplace-bd705",
  storageBucket: "myshoppingplace-bd705.appspot.com",
  messagingSenderId: "58245797536",
  appId: "1:58245797536:web:4b2cabc1c15accaf96dbc5",
  measurementId: "G-LMYYH1SYNQ",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
