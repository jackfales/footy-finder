import * as firebase from 'firebase';
import { doc, updateDoc } from 'firebase/firestore';

/**
 * Retrieves the current logged in user's information from Firestore.
 *
 * @returns Reference to the current logged in user's information in Firestore
 */
const getCurrentUser = () => {
  const currentUser = firebase.auth().currentUser.uid;
  const db = firebase.firestore();
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
