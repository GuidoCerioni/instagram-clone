/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddComment from './add-comment';
import calculateDaysCreatedAgo from '../../helpers/calculateDays';
export default function Comments({
  comments: allComments,
  dateCreated,
  photoDocId,
  commentInput,
}) {
  const [comments, setComments] = useState(allComments.slice(0, 22)); // 22 max number of comments
  const [commentsDisplay, setCommentsDisplay] = useState('hidden');
  const [viewAllButtonDisplay, setViweAllButtonDisplay] = useState('block');

  const daysCreatedAgo = calculateDaysCreatedAgo(dateCreated);

  function handleViewAllComments() {
    if (commentsDisplay === 'hidden') {
      setCommentsDisplay('block');
      setViweAllButtonDisplay('hidden');
    } else {
      setCommentsDisplay('hidden');
      setViweAllButtonDisplay('block');
    }
  }
  return (
    <>
      <div className="px-4">
        {comments.length > 3 ? (
          <>
            <button
              className={`${viewAllButtonDisplay} text-sm text-gray-base`}
              onClick={handleViewAllComments}
            >
              {`View all ${comments.length} comments`}
            </button>
            <button
              className={`${
                viewAllButtonDisplay === 'hidden' ? 'block' : 'hidden'
              } text-sm text-gray-base`}
              onClick={handleViewAllComments}
            >
              {`Hide comments`}
            </button>
          </>
        ) : null}
        {comments.slice(0, comments.length - 3).map((item, key) => (
          <div key={key} className={`${commentsDisplay} text-sm pt-1`}>
            <Link to={`/p/${item.displayName}`}>
              <span className="font-semibold">{`${item.displayName} `}</span>
            </Link>
            <span>{`${item.comment}`}</span>
          </div>
        ))}
        {comments
          .slice(comments.length - 3, comments.length)
          .map((item, key) => (
            <div key={key} className=" text-sm pt-1">
              <Link to={`/p/${item.displayName}`}>
                <span className="font-semibold">{`${item.displayName} `}</span>
              </Link>
              <span>{`${item.comment}`}</span>
            </div>
          ))}
      </div>

      <p className="px-4 py-2 text-xxs uppercase text-gray-base ">
        {daysCreatedAgo}
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
