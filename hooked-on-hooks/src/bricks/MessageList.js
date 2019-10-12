/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useContext } from "react";
import MessageContext from "../contexts/MessageContext";

function MessageListItem({ message }) {
  return <div>{message.text}</div>;
}

function MessageList() {
  const { messages } = useContext(MessageContext);

  const items = messages.map(message => <MessageListItem message={message} />);

  return <div>{items}</div>;
}

export default MessageList;
