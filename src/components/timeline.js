import usePhotos from '../hooks/use-photos';
import Skeleton from 'react-loading-skeleton';

export default function Timeline() {
  const { photos } = usePhotos();
  console.log(`photos`, photos);
  if (!photos) {
    return <Skeleton count={4} height={320} className="m-1" />;
  } else {
    return photos.map((photo, key) => (
      <div key={key} className="mb-5">
        <img src={photo.imageSrc} />
      </div>
    ));
  }
}
