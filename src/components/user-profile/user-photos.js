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
          <div key={key} className="relative group">
            <img src={photo.imageSrc} alt={photo.caption} />
            <div
              className="hidden group-hover:flex absolute top-0 w-full h-full
             justify-center items-center text-white text-base
            bg-black-light bg-opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  // eslint-disable-next-line max-len
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="mr-2">{photo.likes.length} </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  // eslint-disable-next-line max-len
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span>{photo.comments.length}</span>
            </div>
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
