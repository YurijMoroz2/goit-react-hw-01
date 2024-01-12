import { FriendListItem } from "./FriendListItem";

export const FriendList = ({friends}) =>{
    console.log('FriendList',friends);

    return (
        <ul className="friend-list">

<FriendListItem books={friends}>
    <li key={book.id}>
    <div className="item">
  <img className="avatar" src={book.avatar} alt="Avatar" width="48" />
  <p className="name">Friend name</p>
  <p className="status">Friend status</p>
</div></li></FriendListItem>

{/* {friends.map((book) => {
        // return <li>{book.name}</li>;
return (
<li key={book.id}>
    <div className="item">
  <img className="avatar" src={book.avatar} alt="Avatar" width="48" />
  <p className="name">Friend name</p>
  <p className="status">Friend status</p>
</div></li>
)
      })} */}
	
</ul>
    )
}
// --------------------------------------------------
// {/* <ul className="friend-list"> */}
// 	{/* Кількість li залежить від кількості об'єктів в масиві */}
// 	<li>
// 		<FriendListItem />
// 	</li>
// </ul>