import s from "./AddPost.module.css";

function AddPost() {
  return (
    <div className={s.addpost}>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default AddPost;
