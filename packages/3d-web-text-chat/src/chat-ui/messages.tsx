import { FC, useEffect, useRef } from "react";

import Message from "./message";
import styles from "./messages.module.css";

type MessagesProps = {
  messages: Array<{ username: string; message: string }>;
};

const Messages: FC<MessagesProps> = ({ messages }) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className={styles.messagesContainer}>
      {" "}
      {messages.map((msg, index) => (
        <Message key={index} username={msg.username} message={msg.message} />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default Messages;
