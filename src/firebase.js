// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDlkHwt6vrRpEB9wb3SujMSBxAzjv7-Cnc",

  authDomain: "login-7ea4e.firebaseapp.com",

  projectId: "login-7ea4e",

  storageBucket: "login-7ea4e.appspot.com",

  messagingSenderId: "693067298401",

  appId: "1:693067298401:web:481a88b5f57aec4148dc20"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const autentication = getAuth(app)