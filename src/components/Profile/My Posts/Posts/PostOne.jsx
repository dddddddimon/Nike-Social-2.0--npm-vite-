import s from "./PostOne.module.css";

function PostOne(props) {
  return (
    <div>
      <div className={s.item}>
        <img src="https://w0.peakpx.com/wallpaper/847/780/HD-wallpaper-cat-kittens-memes-nike.jpg"></img>{" "}
        <div>{props.message}</div>
        <div>
          <span>❤️</span> {props.likesCount}
        </div>
      </div>
    </div>
  );
}

export default PostOne;
