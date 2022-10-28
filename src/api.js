import firebase from 'firebase/compat/app';
import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

// --------------------------------------------------
// Initialize Firestore
// --------------------------------------------------
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --------------------------------------------------
// Auth
// --------------------------------------------------

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        email: user.email
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

/**
 * Retrieves the current logged in user's information from Firestore.
 *
 * @returns Reference to the current logged in user's information in Firestore
 */
const getCurrentUser = () => {
  const currentUser = firebase.auth().currentUser.uid;
  return db.collection('users').doc(currentUser);
};

// --------------------------------------------------
// User Information
// --------------------------------------------------

export async function getUser() {
  const currentUser = getCurrentUser();
  const userDoc = await currentUser.get();

  return userDoc.data();
}

export async function updateUser(updateInfo) {
  const currentUser = getCurrentUser();

  await currentUser.updateDoc(currentUser, updateInfo);
}
