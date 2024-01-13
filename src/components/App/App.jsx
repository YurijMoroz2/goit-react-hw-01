import { Profile } from '../Profile/Profile';
import userData from '../../userData.json';
import { FriendList } from '../FriendList/FriendList';
import friends from '../../friends.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactoons  from '../../transactions.json'

export function App() {
  return (
    <>
      <Profile userInfo={userData} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactoons} />
          </>
  );
}
