import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  // console.log('FriendList',friends);
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem user={friend} />
        </li>
      ))}
    </ul>
  );
};
