import { useContext } from 'react';
import UserContext from '../../context/user';
import PropTypes from 'prop-types';
import Actions from './actions';
import PostHeader from './header';
import PostPhoto from './photo';

export default function Post({ content }) {
  // header, photo,buttons, footer
  const {
    user: { uid: loggedUserId },
  } = useContext(UserContext);

  const photoLiked = content.likes.includes(loggedUserId);

  return (
    <div className="mb-8 bg-white border border-gray-primary rounded ">
      <PostHeader username={content.username} />
      <PostPhoto imageSrc={content.imageSrc} />
      <Actions
        totalLikes={content.likes.length}
        photoLiked={photoLiked}
        photoDocId={content.docId}
        handleFocus={'asd'}
        loggedUserId={loggedUserId}
      />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.object,
};
