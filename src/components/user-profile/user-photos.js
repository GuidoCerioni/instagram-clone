import PropTypes from 'prop-types';
export default function UserPhotos({ photos }) {
  return (
    <div className="grid">
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
