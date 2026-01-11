import OpenAI from "openai";
import { useCallback, useState } from "react";

export function InputComponent() {
  const [text, setText] = useState();
  const [data, setData] = useState();

  const openAIKey = process.env.REACT_APP_OPEN_AI_KEY;
  console.log("open AI Key - ", openAIKey);

  const handleOnChange = useCallback((event) => {
    event.preventDefault();

    const prompt = event.target.value;
    console.log("In handleOnChange - ", prompt);
    setText(prompt);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      console.log("In submit");
      event.preventDefault();

      const client = new OpenAI({
        apiKey: openAIKey,
        dangerouslyAllowBrowser: true,
      });

      client.responses
        .create({
          model: "gpt-5.2",
          input: text,
          temperature: 0,
        })
        .then((response) => {
          console.log("Response - ", response);
          setData(response);
        })
        .catch((err) => {
          console.log("Error - ", err);
          alert("Error - " + err);
        });
    },
    [text]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        Enter your propt:
        <input
          type="text"
          name="prompt"
          onChange={handleOnChange}
          //   onKeyDown={handleOnKeyDown}
        />
        <button type="submit">Submit</button>
      </form>

      <p>Open AI Response - {data}</p>
    </>
  );
}
