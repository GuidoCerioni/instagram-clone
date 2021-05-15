import { firebase, FielValue } from '../lib/firebase';

const db = firebase.firestore();

export async function doesUsernameExist(username) {
  const result = await db
    .collection('users')
    .where('username', '==', username)
    .get();
  console.log(result.docs);

  return result.docs.map((user) => user.data().length > 0);
}
