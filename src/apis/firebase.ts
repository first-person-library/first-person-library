import { useNavigate, useLocation } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  User,
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getDatabase,
  set,
  ref,
  get,
  equalTo,
  query,
  orderByChild,
} from 'firebase/database';
import { v4 as uuid } from 'uuid';
import { Book, Comment, Suggest } from '../types';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
const auth = getAuth();
const database = getDatabase(app);
//const navigate = useNavigate();
//navigate(`comments/my`);

// const location = useLocation();
const { pathname } = location;
// const isHomePage = pathname === '/';
// const isComments = pathname === '/my';

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

export async function addNewComment(comment: Comment, book: Book) {
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
      uid,
      createdAt: Date(),
      updatedAt: '',
      book,
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

export async function getComments({
  title,
}: {
  title?: string;
}): Promise<Comment[]> {
  console.log(pathname);
  return title ? getSelectedComments({ title }) : getAllComments();
}

export async function getMyComments(): Promise<Comment[]> {
  try {
    let uid = null;

    await onUserStateChange(async (user) => {
      console.log(user);
      uid = user?.uid;
    });

    return await get(
      query(ref(database, 'comments'), orderByChild('uid'), equalTo(uid))
    ).then((snapshot) => {
      console.log(Object.values(snapshot.val()));
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
      return [];
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getAllComments() {
  return await get(
    query(ref(database, 'comments'), orderByChild('createdAt'))
  ).then((snapshot) => {
    if (snapshot.exists()) {
      console.log('전체');

      const comments: Comment[] = [];
      snapshot.forEach((childSnapshot) => {
        comments.push(childSnapshot.val());
      });
      return comments.reverse();
    }
    return [];
  });
}

export async function getSelectedComments({
  title,
}: {
  title?: string;
}): Promise<Comment[]> {
  return await get(
    query(
      ref(database, 'comments'),
      orderByChild('book/title'),
      equalTo(title!)
    )
  ).then((snapshot) => {
    console.log('코멘트 검색');

    return snapshot.exists() ? Object.values(snapshot.val()) : [];
  });
}

export async function getSuggestBooks(): Promise<Suggest[]> {
  return await get(ref(database, 'suggest')).then((snapshot) => {
    if (snapshot.exists()) return Object.values(snapshot.val());
    return [];
  });
}
