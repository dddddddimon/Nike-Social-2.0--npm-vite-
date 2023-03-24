import s from "./Avatar.module.css";

function Avatar() {
  return (
    <div>
      <div>
        <img
          className={s.avatar}
          src="https://i.pinimg.com/originals/41/2a/31/412a31fad9d10f0fc51ad4e6a33f487e.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Avatar;
