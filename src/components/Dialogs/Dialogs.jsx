import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

function Dialogs() {
  return (
    <div className={s.dialogstab}>
      <div className={s.dialogsnames}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/sam">Sam</NavLink>
        </div>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/john">John</NavLink>
        </div>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/petro">Petro</NavLink>
        </div>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/ivan">Ivan</NavLink>
        </div>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/nika">Nika</NavLink>
        </div>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/valera">Valera</NavLink>
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
