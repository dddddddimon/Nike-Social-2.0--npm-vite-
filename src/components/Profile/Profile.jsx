import MyPosts from "./My Posts/MyPosts";
import s from "./Profile.module.css";
import Image from "./Image/Image";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";

function Profile(props) {
  return (
    <div className={s.content}>
      <Image />
      <div className={s.mainUserInfo}>
        <Avatar />
        <Description />
      </div>
      <MyPosts posts={props.posts} />
    </div>
  );
}

export default Profile;
