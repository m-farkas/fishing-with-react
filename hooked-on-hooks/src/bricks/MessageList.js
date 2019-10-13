/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useContext } from "react";
import MessageContext from "../contexts/MessageContext";

const mainCss = css``;

function MessageListItem({ message }) {
  return <div>{message.text}</div>;
}

function MessageList() {
  const { messages } = useContext(MessageContext);

  const items = messages.map(message => (
    <MessageListItem key={message.id} message={message} />
  ));

  return <div css={mainCss}>{items}</div>;
}

export default MessageList;
