import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyAuatne7IIqZUFIzN4lxyBsI-eeJddTx8I",
    authDomain: "jobfind-e388c.firebaseapp.com",
    projectId: "jobfind-e388c",
    storageBucket: "jobfind-e388c.appspot.com",
    messagingSenderId: "847800818709",
    appId: "1:847800818709:web:4f5a04d140b02d06a7421c",
    measurementId: "G-N2KYK2RJ2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);