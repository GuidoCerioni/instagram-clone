/* eslint-disable operator-linebreak */
import { firebase, FieldValue } from '../lib/firebase';

const db = firebase.firestore();

export async function doesUsernameExist(username) {
  // get user by username
  const result = await db
    .collection('users')
    .where('username', '==', username)
    .get();
  return result.docs.length > 0; // true/false
}
export async function getUserByUserId(userId) {
  const user = await db.collection('users').where('userId', '==', userId).get();
  return { ...user.docs[0].data(), docId: user.docs[0].id };
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
  // and already following users.Also add docId for other functions
  const filteredProfiles = profiles.docs
    .map((profile) => ({ ...profile.data(), docId: profile.id }))
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
export async function updateFollowing(
  loggedUserDocId, // logged in user DOC id
  profileId, // profile id i want to follow/unfollow
  isFollowing // true/false
) {
  // Toogle following user array (if not following, follow.
  // if following, unfollow
  return db
    .collection('users')
    .doc(loggedUserDocId)
    .update({
      // (isFollowing) true=>unfollow. false=>follow
      following: isFollowing
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}
export async function updateFollowers(
  loggedUserId, // logged in user id
  suggestedUserDocId, // profile DOC id i followed
  isFollowing // true/false
) {
  // Toogle following user array (if not following, follow.
  // if following, unfollow
  return db
    .collection('users')
    .doc(suggestedUserDocId)
    .update({
      followers: isFollowing // true=>unfollow. false=>follow
        ? FieldValue.arrayRemove(loggedUserId)
        : FieldValue.arrayUnion(loggedUserId),
    });
}
