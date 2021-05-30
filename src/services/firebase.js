import { firebase, FielValue } from '../lib/firebase';

const db = firebase.firestore();

export async function doesUsernameExist(username) {
  const result = await db
    .collection('users')
    .where('username', '==', username)
    .get();
  return result.docs.length > 0; // true/false
}
export async function getUserByUserId(uid) {
  const user = await db.collection('users').where('userID', '==', uid).get();
  return user;
}
