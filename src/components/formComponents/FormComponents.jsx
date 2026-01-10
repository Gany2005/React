import { useCallback, useState } from "react";
import "./FormComponents.css";


export function FormComponents() {
  const [name, setName] = useState("");

  const handleOnSubmit = useCallback((event) => {

    event.preventDefault();
    const name = document.getElementById("data1").value;
    setName(name);
},[setName]);

  return (
    <>
      <form id="formId">
        Enter your name:{" "}
        <input type="text" id="data1" placeholder="Enter your name" /> <br />
        <button type="submit" onClick={handleOnSubmit}>
          {" "}
          Submit{" "}
        </button>
      </form>

      <br />
      <p> The name is: {name}</p>
    </>
  );
}
