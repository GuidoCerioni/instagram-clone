import PropTypes from 'prop-types';
export default function Header({ user }) {
  return (
    <div className="flex">
      <img
        className="rounded-full h-8 w-8 flex"
        src={`/images/avatars/${user.username}.jpg`}
        alt={`${user.username} profile`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/users/userNotFound.png';
        }}
      />
      <div>
        <p>{user.username}</p>
      </div>
    </div>
  );
}
Header.propTypes = {
  user: PropTypes.object.isRequired,
};
