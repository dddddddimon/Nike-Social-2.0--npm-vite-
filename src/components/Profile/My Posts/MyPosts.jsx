import s from "./MyPosts.module.css";
import PostOne from "./Posts/PostOne";
import AddPost from "./AddPost/AddPost";

function MyPosts(props) {
  let postElements = props.posts.map((p) => (
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
