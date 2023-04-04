import { NavLink } from "react-router-dom";
import Dialogs from "../Dialogs";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink className={s.exactDialog}>{props.friendName}</NavLink>
    </div>
  );
};

export default DialogItem;
