import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <img
        className={s.imageACG}
        src="https://i0.wp.com/s3.store.hypebeast.com/media/wiki/fixtures/brand/Nike%20ACG.jpeg"
      ></img>
    </header>
  );
}

export default Header;
