import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

function Dialogs(props) {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem friendName={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
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
