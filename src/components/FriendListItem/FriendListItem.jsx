export const FriendListItem = ({ user: { name, avatar, isOnline } }) => {
  // console.log( { name, avatar, isOnline });
  return (
    <div className="item">
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
      <p className="status">{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
