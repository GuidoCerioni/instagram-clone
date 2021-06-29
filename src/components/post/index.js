import { useContext } from 'react';
import UserContext from '../../context/user';
import PropTypes from 'prop-types';
import Actions from './actions';
import PostHeader from './header';
import PostPhoto from './photo';
import Comments from './comments';

export default function Post({ content }) {
  // header, photo,buttons, footer
  const {
    user: { uid: loggedUserId },
  } = useContext(UserContext);

  const photoLiked = content.likes.includes(loggedUserId);
  console.log(`content.username`, content.username);
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
          handleFocus={'asd'}
          loggedUserId={loggedUserId}
        />
      </div>

      <Comments
        comments={content.comments}
        username={content.username}
        caption={content.caption}
        dateCreated={content.dateCreated}
      />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.object,
};
