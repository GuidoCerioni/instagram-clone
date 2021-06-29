import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Footer({ username, caption }) {
  return (
    <div className="px-4 py-1">
      <Link to={`/p/${username}`}>
        <span className="text-sm font-semibold"> {`${username} `}</span>
      </Link>
      <span className="text-sm">{`${caption}. `}</span>
    </div>
  );
}
Footer.propTypes = {
  username: PropTypes.string,
  caption: PropTypes.string,
};
