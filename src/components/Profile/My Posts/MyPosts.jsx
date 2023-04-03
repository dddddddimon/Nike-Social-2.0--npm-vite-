import s from "./MyPosts.module.css";

import PostOne from "./Posts/PostOne";
import AddPost from "./AddPost/AddPost";

function MyPosts() {
  let posts = [
    { id: 1, message: "Hey there!", likesCount: "9" },
    { id: 2, message: "Yo man! Whats up?", likesCount: "15" },
    { id: 3, message: "Call me!", likesCount: "7" },
    { id: 4, message: "Hello!", likesCount: "22" },
  ];

  let postElements = posts.map((p) => (
    <PostOne message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.content}>
      <div>
        <h3>Posts</h3>
      </div>
      <div>
        <AddPost />
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
