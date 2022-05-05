// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArAQ0rJ4z6G9_QjTa7aucl7Yw-pUVYE_I",
    authDomain: "phone-store-8dde1.firebaseapp.com",
    projectId: "phone-store-8dde1",
    storageBucket: "phone-store-8dde1.appspot.com",
    messagingSenderId: "718681361154",
    appId: "1:718681361154:web:8118a1904dc1694cf6901b",
    measurementId: "G-JCM2LZLEXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;