import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';
import { getPhotos } from '../services/firebase';

export default function usePhotos() {
  const [photos, setPhotos] = useState();
  const [error, setError] = useState(null);
  const {
    user: { uid: userId },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      try {
        // get all the users ids im following
        const { following } = await getUserByUserId(userId);
        let followedUsersPhotos = [];
        if (following.length > 0) {
          // getPhotos get all photos from users im following
          followedUsersPhotos = await getPhotos(userId, following);
          // sort photos by date
          followedUsersPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        } else {
        }
        setPhotos(followedUsersPhotos);
      } catch (error) {
        setError(error);
      }
    }

    getTimelinePhotos();
  }, [userId]);
  if (error) {
    return { error: error };
  } else {
    return { photos };
  }
}
