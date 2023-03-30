import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" className={s.linkNav}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={s.linkNav}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" className={s.linkNav}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" className={s.linkNav}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={s.linkNav}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
