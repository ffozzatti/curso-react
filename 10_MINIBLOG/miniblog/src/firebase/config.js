import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDCCFADSL9jeuPKKY8Jw0VizQozgwOLRHI",
  authDomain: "miniblog-67036.firebaseapp.com",
  projectId: "miniblog-67036",
  storageBucket: "miniblog-67036.appspot.com",
  messagingSenderId: "16938381438",
  appId: "1:16938381438:web:6924972f075b114e6ba82f"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }