import s from "./AddPost.module.css";
import React from "react";

function AddPost(props) {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    let text = newPostElement.current.value;

    props.addPost(text);
    newPostElement.current.value = "";
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
