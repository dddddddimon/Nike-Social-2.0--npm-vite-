import s from "./AddPost.module.css";
import React from "react";

function AddPost() {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={s.addpost}>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={onAddPost}>Add Post</button>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default AddPost;
