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
  let dialogsData = [
    { id: 1, name: "Sam" },
    { id: 2, name: "Lusy" },
    { id: 3, name: "John" },
    { id: 4, name: "Pedro" },
    { id: 5, name: "Ivan" },
    { id: 6, name: "Nika" },
    { id: 7, name: "Valera" },
    { id: 8, name: "Huylanchik" },
  ];

  let messagesData = [
    { id: 1, message: "Hey there!" },
    { id: 2, message: "Yo man! Whats up?" },
    { id: 3, message: "Call me!" },
    { id: 4, message: "Hello!" },
  ];

  return (
    <div className={s.dialogstab}>
      <div className={s.dialogsnames}>
        <DialogItem friendName={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem friendName={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem friendName={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem friendName={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem friendName={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem friendName={dialogsData[5].name} id={dialogsData[5].id} />
        <DialogItem friendName={dialogsData[6].name} id={dialogsData[6].id} />
        <DialogItem friendName={dialogsData[7].name} id={dialogsData[7].id} />
      </div>

      <div className={s.messages}>
        <Message messageText={messagesData[0].message} />
        <Message messageText={messagesData[1].message} />
        <Message messageText={messagesData[2].message} />
        <Message messageText={messagesData[3].message} />
      </div>
    </div>
  );
}

export default Dialogs;
