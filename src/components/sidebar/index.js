import useUser from '../../hooks/use-user';
import Footer from './footer';
import Suggestions from './suggestions';
import User from './user';

export default function Sidebar() {
  const { user } = useUser();
  return (
    <>
      <div className="mt-6 mb-4">
        <User username={user.username} fullName={user.fullName} />
      </div>
      <Suggestions
        userId={user.userId}
        following={user.following}
        loggedUserId={user.userId}
        loggedUserDocId={user.docId}
      />
      <Footer />
    </>
  );
}
