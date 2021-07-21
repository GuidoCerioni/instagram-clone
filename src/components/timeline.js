import usePhotos from '../hooks/use-photos';
// import useUser from '../hooks/use-user';
import Skeleton from 'react-loading-skeleton';
import Post from './post';

export default function Timeline() {
  /*
  const {
    user: { following: userFollowing },
  } = useUser();
  */
  const { photos } = usePhotos();

  if (!photos) {
    return <Skeleton className="mb-8" count={4} height={850} width={610} />;
  } else if (photos.length > 0) {
    return photos.map((content, key) => (
      <div key={key}>
        <Post content={content} />
      </div>
    ));
  } else {
    return (
      <p className="text-2xl text-center">
        Start following people to see photos!
      </p>
    );
  }
}
