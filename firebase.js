// import * as firebase from "firebase/app";
// // import { initializeApp, getApps, getApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBgi5rLY7TIXJiZRqkMpxjr6I8032ywbTE",
//   authDomain: "uber-eats-clone-5bf35.firebaseapp.com",
//   projectId: "uber-eats-clone-5bf35",
//   storageBucket: "uber-eats-clone-5bf35.appspot.com",
//   messagingSenderId: "966768477709",
//   appId: "1:966768477709:web:cb821ad2fbaa47a8953744",
// };

// !firebase.getApps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.getApp();

// // !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// export default firebase;

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgi5rLY7TIXJiZRqkMpxjr6I8032ywbTE",
  authDomain: "uber-eats-clone-5bf35.firebaseapp.com",
  projectId: "uber-eats-clone-5bf35",
  storageBucket: "uber-eats-clone-5bf35.appspot.com",
  messagingSenderId: "966768477709",
  appId: "1:966768477709:web:cb821ad2fbaa47a8953744",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
