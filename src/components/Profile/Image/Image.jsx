import s from "./Image.module.css";

function Image() {
  return (
    <div>
      <img
        className={s.img}
        src="https://static.vecteezy.com/system/resources/previews/004/631/129/large_2x/nike-running-shoes-nike-zoom-fly-3-pink-black-men-s-running-shoes-on-box-in-the-store-free-photo.JPG"
      ></img>
    </div>
  );
}

export default Image;
