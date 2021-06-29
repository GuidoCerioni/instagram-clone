/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import Loader from 'react-loader-spinner';
import UserContext from '../../context/user';
import { updateComents } from '../../services/firebase';

export default function AddComment({
  comments,
  setComments,
  commentInput,
  photoDocId,
}) {
  const [comment, setComment] = useState('');
  const [loaderDisplay, setloaderDisplay] = useState('hidden');
  const {
    user: { displayName },
  } = useContext(UserContext);

  async function handleComment(e) {
    e.preventDefault();
    try {
      setloaderDisplay('inline-block');
      await updateComents(photoDocId, displayName, comment);
      setComments([
        { comment: comment, displayName: displayName },
        ...comments,
      ]);
      setComment('');
    } catch (err) {
      console.error(err);
    } finally {
      setloaderDisplay('hidden');
    }
  }
  return (
    <form
      onSubmit={(event) => handleComment(event)}
      method="POST"
      id="add-comment"
      autoComplete="new-comment"
      className="px-4 py-4 flex items-center border-t border-gray-primary"
    >
      <svg
        cursor="pointer"
        aria-label="emoji"
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
        autoComplete="off"
        type="text"
        placeholder="Add a comment..."
        className="text-sm placeholder-gray-base
                     rounded px-4 flex-grow focus:outline-none
                   "
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        ref={commentInput}
      />
      <Loader
        className={`${loaderDisplay} `}
        type="TailSpin"
        color="#0082FF"
        height={16}
        width={16}
      />
      <button
        disabled={comment.length < 1}
        type="submit"
        className={`text-sm font-semibold ml-3
          text-blue-medium  hover:text-blue-mediumHover focus:outline-none
          ${!comment && 'opacity-40'}`}
      >
        Post
      </button>
    </form>
  );
}
AddComment.propTypes = {
  comments: PropTypes.array,
  setComments: PropTypes.func,
  commentInput: PropTypes.any,
  photoDocId: PropTypes.string,
};
