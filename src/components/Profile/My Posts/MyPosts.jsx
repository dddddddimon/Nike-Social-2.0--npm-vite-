import s from "./MyPosts.module.css";
import UserPosts from "./UserPosts/UserPosts";
import PostOne from "./Posts/PostOne";
import AddPost from "./AddPost/AddPost";

function MyPosts() {
  return (
    <div className={s.content}>
      <div className={s.userposts}>
        <h3>My Posts</h3>
      </div>
      <div>
        <UserPosts message="I like Nike so much!" />
        <UserPosts message="This is my new Nike account. Subscribe!" />
      </div>
      <div>
        <AddPost />
      </div>
      <div className={s.posts}>
        <div>
          <h3>New Posts</h3>
        </div>
        <div>
          <PostOne message="Hey, nice to See you here!" likesCount="9" />
          <PostOne
            message="Cool bro, let's hand out some time!"
            likesCount="15"
          />
        </div>
      </div>
    </div>
  );
}

export default MyPosts;
