import s from "./MyPosts.module.css";
import UserPosts from "./UserPosts/UserPosts";
import PostOne from "./Posts/PostOne";
import AddPost from "./AddPost/AddPost";

function MyPosts() {
  let postsData = [
    { id: 1, message: "Hey there!", likesCount: "9" },
    { id: 2, message: "Yo man! Whats up?", likesCount: "15" },
    { id: 3, message: "Call me!", likesCount: "7" },
    { id: 4, message: "Hello!", likesCount: "22" },
  ];

  return (
    <div className={s.content}>
      <div>
        <h3>Posts</h3>
      </div>
      <div>
        <AddPost />
      </div>
      <div className={s.posts}>
        <PostOne
          message={postsData[0].message}
          likesCount={postsData[0].likesCount}
        />
        <PostOne
          message={postsData[1].message}
          likesCount={postsData[1].likesCount}
        />
        <PostOne
          message={postsData[2].message}
          likesCount={postsData[2].likesCount}
        />
        <PostOne
          message={postsData[3].message}
          likesCount={postsData[3].likesCount}
        />
      </div>
    </div>
  );
}

export default MyPosts;
