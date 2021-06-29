/* eslint-disable max-len */
import PropTypes from 'prop-types';

export default function Comments({ comments, username, caption, dateCreated }) {
  const daysCreatedAgo = () => {
    const date = new Date(dateCreated);
    const actualDate = new Date();
    console.log(`actualDate.getTime()`, actualDate.getTime());
    console.log(`date.getTime()`, date.toString());
    // prettier-ignore
    const daysDifference = Math.round(
      (actualDate.getTime() - date.getTime()) / (1000 * 3600 * 24)
    );

    console.log(`daysDifference`, daysDifference);
    if (daysDifference > 1) {
      if (daysDifference > 6) {
        return `${Math.round(daysDifference / 7)} WEEKS AGO`;
      }
      return `${daysDifference} DAYS AGO`;
    } else if (daysDifference < 1) {
      return `TODAY`;
    } else {
      return `${daysDifference} DAY AGO`;
    }
  };
  console.log(`daysCreatedAgo`, daysCreatedAgo);
  return (
    <div className="">
      <p className="text-sm px-4 py-1">
        <span className="font-semibold"> {`${username} `}</span>
        {`${caption}. `}
      </p>
      {comments.map((comment, key) => (
        <p key={key} className="text-sm px-4 py-1">
          <span className="font-semibold "> {`${comment.displayName} `}</span>
          {`${comment.comment} `}
        </p>
      ))}
      <p className="px-4 py-2 text-xxs text-gray-base ">{daysCreatedAgo()}</p>
      <div className="px-4 py-4 flex border-t-2 border-gray-primary">
        <svg
          aria-aria-label="emoji"
          fill="#262626"
          height="24"
          width="24"
          viewBox="0 0 48 48"
        >
          <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
          <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
        </svg>
        <input
          aria-label="Enter your comment"
          type="text"
          placeholder="Add a comment..."
          className="text-sm placeholder-gray-base
                     rounded mb-2 px-4
                   focus:ring-2 focus:ring-blue-medium"
        />
      </div>
    </div>
  );
}
Comments.propTypes = {
  comments: PropTypes.array,
  username: PropTypes.string,
  caption: PropTypes.string,
  dateCreated: PropTypes.number,
};
