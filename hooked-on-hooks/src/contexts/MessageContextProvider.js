import React, { useReducer } from "react";
import MessageReducer from "../reducers/MessageReducer";
import MessageContext from "./MessageContext";

function MessageContextProvider({ children }) {
  const [messages, dispatch] = useReducer(MessageReducer, []);

  function log(message) {
    message.id = messages.length + 1;

    dispatch({ type: "add", payload: { message } });

    setTimeout(
      () => dispatch({ type: "remove", payload: { id: message.id } }),
      5000
    );
  }

  return (
    <MessageContext.Provider value={{ messages, log }}>
      {children}
    </MessageContext.Provider>
  );
}

export default MessageContextProvider;
