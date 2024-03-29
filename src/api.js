import firebase from 'firebase/compat/app';
import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  addDoc,
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from 'firebase/firestore';

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
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

/**
 * Retrieves the current logged in user's information from Firestore.
 *
 * @returns Reference to the current logged in user's information in Firestore
 */
const getCurrentUser = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  return currentUser;
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

// --------------------------------------------------
// Games
// --------------------------------------------------

export const createGame = async (gameInfo) => {
  try {
    const newGame = await addDoc(collection(db, 'games'), {
      game_owner: getCurrentUser().uid,
      total_players: 1,
      ...gameInfo
    });

    console.log("Document written with ID: ", newGame.id);
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
}

export const getGame = async (gameId) => {
  const gameRef = doc(db, "games", gameId);
  const game = await getDoc(gameRef);
  return game.data();
}

export const signUpForGame = async (gameId) => {
  const userId = getCurrentUser().uid;
  try {
    const registeredPlayerRef = doc(db, 'games/' + gameId + '/registered_players/', userId);
    await setDoc(registeredPlayerRef, {
      player_id: userId,
    });

    console.log("Document written with ID: ", userId);
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
}

// --------------------------------------------------
// Game Previews
// --------------------------------------------------

export const getAllGamePreviews = async () => {
  const gamePreviews = query(collectionGroup(db, 'game_preview'));
  const querySnapshot = await getDocs(gamePreviews);
  return querySnapshot.docs;
}