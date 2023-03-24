import s from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <a>Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>Messages</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>News</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>Music</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>Settings</a>
      </div>
    </nav>
  );
}

export default Navigation;
