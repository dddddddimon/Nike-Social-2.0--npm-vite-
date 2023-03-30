import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink className={s.exactDialog}>{props.friendName}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialogs}>{props.messageText}</div>;
};

function Dialogs() {
  return (
    <div className={s.dialogstab}>
      <div className={s.dialogsnames}>
        <DialogItem friendName="Sam" id="sam" />
        <DialogItem friendName="Lusy" id="lusy" />
        <DialogItem friendName="John" id="john" />
        <DialogItem friendName="Pedro" id="pedro" />
        <DialogItem friendName="Ivan" id="ivan" />
        <DialogItem friendName="Nika" id="nika" />
        <DialogItem friendName="Valera" id="valera" />
        <DialogItem friendName="Huylanchik" id="huylanchik" />
      </div>
      <div className={s.messages}>
        <Message messageText="Hey there!" />
        <Message messageText="Yo man! Whats up?" />
        <Message messageText="Call me!" />
        <Message messageText="Hello!" />
      </div>
    </div>
  );
}

export default Dialogs;
