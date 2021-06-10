import { firebase, FielValue } from '../lib/firebase';

const db = firebase.firestore();

export async function doesUsernameExist(username) {
  // get user by username
  const result = await db
    .collection('users')
    .where('username', '==', username)
    .get();
  return result.docs.length > 0; // true/false
}
export async function getUserByUserId(uid) {
  const user = await db.collection('users').where('userId', '==', uid).get();
  return user.docs[0].data();

  /* Another aproach
   const user = result.docs.map((item) => ({
     ...item.data(),
     docId: item.id,
   }));
   return user;
  */
}
export async function getSuggestedProfiles(userId, following) {
  // get 500 random profiles
  const profiles = await db.collection('users').limit(500).get();

  // filteredProfiles is the array excluding user own profile,
  // and already following users
  const filteredProfiles = profiles.docs
    .map((profile) => profile.data())
    .filter(
      (profile) =>
        profile.userId != userId && !following.includes(profile.userId)
    );
  // randomize suggested users each time
  // set suggested quantity and calculate index
  const suggestedProfilesQuantity = 3;
  const index = Math.floor(
    Math.random() * (filteredProfiles.length - suggestedProfilesQuantity)
  );
  // slice profiles array randomly to {suggestedProfilesQuantity} profiles
  return filteredProfiles.slice(index, index + suggestedProfilesQuantity);
}
