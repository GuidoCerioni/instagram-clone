import useUser from '../../hooks/use-user';
import Suggestions from './suggestions';
import User from './user';

export default function Sidebar() {
  const { user } = useUser();
  return (
    <>
      <User username={user.username} fullName={user.fullName} />
      <Suggestions
        userId={user.userId}
        following={user.following}
        loggedUserId={user.userId}
        loggedUserDocId={user.docId}
      />
    </>
  );
}
