import { initializeApp } from 'firebase/app';
import {
  User,
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, set, ref } from 'firebase/database';
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

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export async function logout() {
  signOut(auth).catch(console.error);
}

export async function onUserStateChange(callback: (user: User | null) => void) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

export async function addNewComment(comment: Comment, isbn: string) {
  const id = uuid();

  set(ref(database, `comments/${id}`), {
    ...comment,
    id,
    isbn,
  });
}
