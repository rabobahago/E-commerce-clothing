import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDfG1_zMNG1f1zX-pUO5byTv_UvoIbgB0E",
  authDomain: "e-commerce-clothing-5f597.firebaseapp.com",
  projectId: "e-commerce-clothing-5f597",
  storageBucket: "e-commerce-clothing-5f597.appspot.com",
  messagingSenderId: "184942412761",
  appId: "1:184942412761:web:dc2d7b191955be32680fc8",
  measurementId: "G-X7SD0KRRFB",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShop = await userRef.get();
  if (!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
