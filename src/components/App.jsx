import { Profile } from './Profile';
import userData from '../userData.json/';
import { FriendList } from './FriendList';
import friends from '../friends.json';

export function App() {
  return (
    <>
      <Profile userInfo={userData} />
      <FriendList friends={friends}/>
    </>
  );
}
