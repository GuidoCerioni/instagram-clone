import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
export default function UserPhotos({ photos }) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-6 ">
      {!photos ? (
        <>
          <Skeleton width={312} height={390} />
          <Skeleton width={312} height={390} />
          <Skeleton width={312} height={390} />
          <Skeleton width={312} height={390} />
          <Skeleton width={312} height={390} />
          <Skeleton width={312} height={390} />
        </>
      ) : photos.length > 0 ? (
        photos.map((photo, key) => (
          <div key={key}>
            <img src={photo.imageSrc} />
          </div>
        ))
      ) : (
        <div className="flex justify-center col-span-3 text-xs phone:text-sm">
          <p>User does not have any photos yet</p>
        </div>
      )}
    </div>
  );
}
UserPhotos.propTypes = {
  photos: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]).isRequired,
};
