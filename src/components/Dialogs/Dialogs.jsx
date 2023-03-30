import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

function Dialogs() {
  return (
    <div className={s.dialogstab}>
      <div className={s.dialogsnames}>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/sam" className={s.exactDialog}>
            Sam
          </NavLink>
        </div>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/john" className={s.exactDialog}>
            John
          </NavLink>
        </div>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/petro" className={s.exactDialog}>
            Petro
          </NavLink>
        </div>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/ivan" className={s.exactDialog}>
            Ivan
          </NavLink>
        </div>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/nika" className={s.exactDialog}>
            Nika
          </NavLink>
        </div>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/valera" className={s.exactDialog}>
            Valera
          </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.massege}>Hey there!</div>
        <div className={s.massege}>Yo man! What's up?</div>
        <div className={s.massege}>Call me!</div>
        <div className={s.massege}>Hello!</div>
      </div>
    </div>
  );
}

export default Dialogs;
