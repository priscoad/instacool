import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDXvDO9C6WBY1WBTCeNCctKjAuRZ8O0h4Y",
    authDomain: "instacool-a113a.firebaseapp.com",
    projectId: "instacool-a113a",
    storageBucket: "instacool-a113a.appspot.com",
    messagingSenderId: "443186105579",
    appId: "1:443186105579:web:14810e039a711b656dc2ae",
    measurementId: "G-PML12Q7ZVR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

