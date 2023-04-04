import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

function Dialogs() {
  let dialogs = [
    { id: 1, name: "Sam" },
    { id: 2, name: "Lusy" },
    { id: 3, name: "John" },
    { id: 4, name: "Pedro" },
    { id: 5, name: "Ivan" },
    { id: 6, name: "Nika" },
    { id: 7, name: "Valera" },
    { id: 8, name: "Huylanchik" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem friendName={d.name} id={d.id} />
  ));

  let messages = [
    { id: 1, message: "Hey there!" },
    { id: 2, message: "Yo man! Whats up?" },
    { id: 3, message: "Call me!" },
    { id: 4, message: "Hello!" },
  ];

  let messagesElements = messages.map((m) => (
    <Message messageText={m.message} />
  ));

  return (
    <div className={s.dialogstab}>
      <div className={s.dialogsnames}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
}

export default Dialogs;
