import s from "./../Dialogs.module.css";

const Message = (props) => {
  return <div className={s.dialogs}>{props.messageText}</div>;
};

export default Message;
