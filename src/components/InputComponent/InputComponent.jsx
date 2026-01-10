import { useCallback, useState } from "react";

export function InputComponent() {
  const [text, setText] = useState();

  const handleOnChange = useCallback((event) => {
    event.preventDefault();

    const name = event.target.value;
    console.log("In handleOnChange - ", name);
    setText(name);
  }, []);

  const handleOnKeyUp = useCallback((event) => {
    event.preventDefault();

    console.log("event - ", event);

    if (event.key === "Enter") {
      setText("Enter");
      event.stopPropagation();
      event.preventDefault();
    }
  }, []);

  const handleSubmit = useCallback((event) => {
    console.log("In submit");
    event.preventDefault();
  }, []);
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        Enter your name:
        <input
          type="text"
          nme="name"
          onChange={handleOnChange}
          onKeyUp={handleOnKeyUp}
          //   onKeyDown={handleOnKeyDown}
        />
      </form>

      <h1>{text}</h1>
    </>
  );
}