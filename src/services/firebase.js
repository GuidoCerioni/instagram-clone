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
export async function getUserByUsername(username) {
  const user = await db
    .collection('users')
    .where('username', '==', username)
    .get();
  return user.docs.length > 0
    ? { ...user.docs[0].data(), docId: user.docs[0].id }
    : false;
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
  profileDocId, // profile DOCid i followed
  isFollowing // true/false
) {
  // Toogle following user array (if not following, follow.
  // if following, unfollow
  return db
    .collection('users')
    .doc(profileDocId)
    .update({
      followers: isFollowing // true=>unfollow. false=>follow
        ? FieldValue.arrayRemove(loggedUserId)
        : FieldValue.arrayUnion(loggedUserId),
    });
}
export async function getPhotos(userId, following) {
  const response = await db
    .collection('photos')
    .where('userId', 'in', following)
    .get();

  const userFollowedPhotos = response.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  const photosWithDetails = Promise.all(
    userFollowedPhotos.map(async (photo) => {
      const { username } = await getUserByUserId(photo.userId);
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      return { username, ...photo, userLikedPhoto };
    })
  );
  return photosWithDetails;
}
export async function updateLikes(toogleLike, photoDocId, loggedUserId) {
  return db
    .collection('photos')
    .doc(photoDocId)
    .update({
      likes: toogleLike // true=>unlike. false=>like
        ? FieldValue.arrayRemove(loggedUserId)
        : FieldValue.arrayUnion(loggedUserId),
    });
}
export async function updateComents(photoDocId, displayName, comment) {
  return db
    .collection('photos')
    .doc(photoDocId)
    .update({
      comments: FieldValue.arrayUnion({ comment, displayName }),
    });
}
export async function getPhotosByUserId(userId) {
  const response = await db
    .collection('photos')
    .where('userId', '==', userId)
    .get();

  const userPhotos = response.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));
  return userPhotos.length > 0 ? userPhotos : [];
}
export async function isUserFollowingProfile(userId, profileId) {
  const response = await db
    .collection('users')
    .where('userId', '==', userId)
    .get();
  return response.docs[0].data().following.includes(profileId) ? true : false;
}
