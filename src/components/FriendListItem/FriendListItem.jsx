import clsx from 'clsx';
import css from './FriendListItem.module.css'

export const FriendListItem = ({ user: { name, avatar, isOnline } }) => {
 
  const statusClases = clsx(css.status,{
[css.isOnline]:isOnline,
[css.isOffline]:!isOnline
  })
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClases}><span>{isOnline ? 'Online' : 'Offline'}</span></p>
    </div>
  );
};
