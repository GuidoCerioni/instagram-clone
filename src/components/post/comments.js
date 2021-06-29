/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddComment from './add-comment';

export default function Comments({
  comments: allComments,
  dateCreated,
  photoDocId,
  commentInput,
}) {
  const [comments, setComments] = useState(allComments);

  function calculateDaysCreatedAgo() {
    const date = new Date(dateCreated);
    const actualDate = new Date();

    // prettier-ignore
    const daysDifference = Math.round(
      (actualDate.getTime() - date.getTime()) / (1000 * 3600 * 24)
    );

    if (daysDifference > 1) {
      // days ago handle
      if (daysDifference > 6) {
        return `${Math.round(daysDifference / 7)} weeks ago`;
      }
      return `${daysDifference} days ago`;
    } else if (daysDifference < 1) {
      return `today`;
    } else {
      return `${daysDifference} day ago`;
    }
  }

  return (
    <>
      <div className="px-4">
        {comments.length > 3 ? (
          <p className="text-sm text-gray-base ">
            {`View all ${comments.length} comments`}
          </p>
        ) : null}
        {comments.slice(0, 3).map((item, key) => (
          <div key={key} className=" text-sm pt-1">
            <Link to={`/p/${item.displayName}`}>
              <span className="font-semibold">{`${item.displayName} `}</span>
            </Link>
            <span>{`${item.comment}`}</span>
          </div>
        ))}
      </div>

      <p className="px-4 py-2 text-xxs uppercase text-gray-base ">
        {calculateDaysCreatedAgo()}
      </p>

      <AddComment
        comments={comments}
        setComments={setComments}
        commentInput={commentInput}
        photoDocId={photoDocId}
      />
    </>
  );
}
Comments.propTypes = {
  comments: PropTypes.array,
  dateCreated: PropTypes.number,
  photoDocId: PropTypes.string,
  commentInput: PropTypes.object,
};
