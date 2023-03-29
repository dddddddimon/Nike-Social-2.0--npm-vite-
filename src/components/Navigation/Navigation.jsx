import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={s.linkProfile}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={s.linkProfile}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={s.linkProfile}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={s.linkProfile}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" className={s.linkProfile}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
