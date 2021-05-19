import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config= {
    apiKey: "AIzaSyCb1zf7tKk4Z9tNILkMau2EToTcGzxsmz0",
    authDomain: "z-clothing-21599.firebaseapp.com",
    projectId: "z-clothing-21599",
    storageBucket: "z-clothing-21599.appspot.com",
    messagingSenderId: "120062974601",
    appId: "1:120062974601:web:e593aff2db09f2fe140458",
    measurementId: "G-ETT9XQS2YJ"
  };
  export const createUserProfileDocument= async (userAuth,additionalData)=> {
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();
    if(!snapShot.exists){
      const{displayName , email}= userAuth;
      const createdAt= new Date();
      try{
        await userRef.set({displayName,email,createdAt,...additionalData});
      }
      catch(error){
        console.log("error creating user:", error.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);
  export const auth= firebase.auth();
  export const firestore=firebase.firestore();
  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);
  export default firebase;
