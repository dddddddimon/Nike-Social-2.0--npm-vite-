import s from "./UserPosts.module.css";

function UserPosts(props) {
  return (
    <div className={s.myposts}>
      <div>{props.message}</div>
    </div>
  );
}

export default UserPosts;
