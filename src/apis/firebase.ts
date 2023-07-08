import { initializeApp } from 'firebase/app';
import {
  User,
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, set, ref, get } from 'firebase/database';
import { v4 as uuid } from 'uuid';
import { Comment } from '../types';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);

export async function login() {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }
}

export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
}

export async function onUserStateChange(callback: (user: User | null) => void) {
  onAuthStateChanged(auth, callback);
}

export async function addNewComment(comment: Comment, isbn: string) {
  const id = uuid();
  let uid;

  await onUserStateChange(async (user) => {
    uid = user?.uid;
    if (uid) {
      await addUserComment(uid, id);
    }
  });

  try {
    await set(ref(database, `comments/${id}`), {
      ...comment,
      id,
      isbn,
      uid,
    });
  } catch (error) {
    console.error(error);
  }
}

export async function addUserComment(uid: string, id: string) {
  const userRef = ref(database, `users/${uid}`);

  try {
    await get(userRef).then(async (snapshot) => {
      const comments = snapshot.val();

      if (snapshot.exists()) {
        await set(userRef, {
          ...comments,
          [comments.length]: id,
        });
      } else {
        await set(userRef, { 0: id });
      }
    });
  } catch (error) {
    console.error(error);
  }
}
