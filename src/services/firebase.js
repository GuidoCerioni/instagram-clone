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
  const result = await db.collection('users').where('userId', '==', uid).get();
  const user = result.docs[0].data();
  return user;
  // Another aproach
  // const user = result.docs.map((item) => ({
  //   ...item.data(),
  //   docId: item.id,
  // }));
  // return user;
}
export async function getSuggestedProfiles(userId) {
  const result = await db.collection('users').limit(10).get();
  return result.docs.map((profile) => profile.data());
}
