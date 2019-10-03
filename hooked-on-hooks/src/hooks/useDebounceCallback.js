import { useRef } from "react";

export default function useDebounceCallback(callback, delay) {
  const debounceFunction = useRef(callback);
  debounceFunction.current = callback;

  const timeoutHandler = useRef(null);

  const debounceCallback = (...args) => {
    clearTimeout(timeoutHandler.current);

    timeoutHandler.current = setTimeout(() => {
      debounceFunction.current(...args);
    }, delay);
  };

  return [debounceCallback];
}
