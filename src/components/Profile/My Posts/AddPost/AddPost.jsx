import s from "./AddPost.module.css";
import React from "react";

function AddPost(props) {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    props.updateNewPostText("");
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.addpost}>
      <div>
        <textarea ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onChange={onPostChange} onClick={onAddPost}>
          Add Post
        </button>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default AddPost;
