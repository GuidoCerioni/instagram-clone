import PropTypes from 'prop-types';

export default function PostPhoto({ imageSrc }) {
  return <img className="" src={imageSrc} />;
}

PostPhoto.propTypes = {
  imageSrc: PropTypes.string,
};
