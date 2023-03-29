import s from "./Dialogs.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Dialogs() {
  return (
    <div className={s.dialogstab}>
      <div className={s.dialogsnames}>
        <div className={`${s.dialog} ${s.active}`}>Sam</div>
        <div className={s.dialog}>John</div>
        <div className={s.dialog}>Petro</div>
        <div className={s.dialog}>Ivan</div>
        <div className={s.dialog}>Nika</div>
        <div className={s.dialog}>Valera</div>
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
