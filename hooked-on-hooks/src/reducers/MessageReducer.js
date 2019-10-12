function add(messages, { message }) {
  const result = messages.concat();
  result.push(message);
  return result;
}

function remove(messages, { id }) {
  return messages.filter(m => m.id !== id);
}

function MessageReducer(messages, action) {
  switch (action.type) {
    case "add":
      return add(messages, action.payload);
    case "remove":
      return remove(messages, action.payload);
    default:
      return messages;
  }
}

export default MessageReducer;
