import s from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <a href="/profile" className={s.linkProfile}>
          Profile
        </a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="/dialogs" className={s.linkProfile}>
          Messages
        </a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="/news" className={s.linkProfile}>
          News
        </a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="/music" className={s.linkProfile}>
          Music
        </a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="/settings" className={s.linkProfile}>
          Settings
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
