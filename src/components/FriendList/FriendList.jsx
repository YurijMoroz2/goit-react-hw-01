import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css'
export const FriendList = ({ friends }) => {
  // console.log('FriendList',friends);
  
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem user={friend} />
        </li>
      ))}
    </ul>
  );
};
