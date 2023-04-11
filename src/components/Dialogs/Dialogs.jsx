import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import React from "react";

function Dialogs(props) {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem friendName={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message messageText={m.message} />
  ));

  let newMessagesElement = React.createRef();

  let onAddMessage = () => {
    let message = newMessagesElement.current.value;
    alert(message);
  };

  return (
    <div className={s.dialogstab}>
      <div className={s.dialogsnames}>{dialogsElements}</div>

      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessagesElement}></textarea>
        </div>
        <div>
          <button onClick={onAddMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
