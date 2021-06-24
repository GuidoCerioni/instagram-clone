import PropTypes from 'prop-types';
import PostHeader from './header';
import PostPhoto from './photo';

export default function Post({ content }) {
  // header, photo,buttons, footer
  //  console.log(`content`, content.username);
  return (
    <div className="border border-gray-primary rounded">
      <PostHeader username={content.username} />
      <PostPhoto imageSrc={content.imageSrc} />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.object,
};
