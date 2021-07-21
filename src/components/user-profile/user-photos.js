import PropTypes from 'prop-types';
export default function UserPhotos({ photos }) {
  return (
    <div className="grid grid-cols-3 gap-6 ">
      {photos.map((photo, key) => (
        <div key={key}>
          <img src={photo.imageSrc} />
        </div>
      ))}
    </div>
  );
}
UserPhotos.propTypes = {
  photos: PropTypes.array.isRequired,
};
