import { useContext, useRef } from 'react';
import UserContext from '../../context/user';
import PropTypes from 'prop-types';
import Actions from './actions';
import PostHeader from './header';
import PostPhoto from './photo';
import Comments from './comments';
import Footer from './footer';

export default function Post({ content }) {
  const commentInput = useRef(null);
  function handleFocus() {
    commentInput.current.focus();
  }

  // header, photo,buttons, footer
  const {
    user: { uid: loggedUserId },
  } = useContext(UserContext);

  const photoLiked = content.likes.includes(loggedUserId);
  return (
    <div className="mb-8 bg-white border border-gray-primary rounded ">
      <div className="px-4">
        <PostHeader username={content.username} />
      </div>
      <PostPhoto imageSrc={content.imageSrc} />
      <div className="px-4">
        <Actions
          totalLikes={content.likes.length}
          photoLiked={photoLiked}
          photoDocId={content.docId}
          handleFocus={handleFocus}
          loggedUserId={loggedUserId}
        />
      </div>
      <Footer username={content.username} caption={content.caption} />
      <Comments
        comments={content.comments}
        dateCreated={content.dateCreated}
        photoDocId={content.docId}
        commentInput={commentInput}
      />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.object,
};
