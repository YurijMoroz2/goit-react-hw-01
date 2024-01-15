
import css from './Profile.module.css'
import { AiTwotoneMail } from "react-icons/ai";

export const Profile = ({userInfo : {username,tag,location,avatar,stats }}) =>{
    // console.log(stats);
    return (
 <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
      width='150'
      height='150'
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}><AiTwotoneMail />{tag}</p>
    <p className={css.location}>{location}</p>
  </div>


  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers:</span>
      <span className={css.value}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views:</span>
      <span className={css.value}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes:</span>
      <span className={css.value}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}