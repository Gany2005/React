import { useCallback, useState } from "react";

export function FirstComponent() {
  const [text, setText] = useState();
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = useCallback((event) => {
    event.preventDefault();
    console.log("in Handle Click");
    setText("THis is OnClick Event");
  }, []);

  const handleDouleClick = useCallback((event) => {
    event.preventDefault();
    console.log("in Handle Double Click");
    setText("THis is onDoubleClick Event");
  }, []);

  const handleMouseOver = useCallback((event) => {
    event.preventDefault();
    console.log("in Handle Mouse Over");
    setText("THis is mouse over Event");
  }, []);

  const handleMouseLeave = useCallback((event) => {
    event.preventDefault();
    console.log("in Mouse Leave");
    setShowMenu(false);
    setText("THis is Mouse leave Event");
  }, []);

  const handleContextMenu = useCallback((event) => {
    event.preventDefault();
    console.log("in Context Menu");
    setShowMenu(true);
    setText("THis is context Event");
  }, []);

  return (
    <>
      <div contextmenu="mymenu" hidden = {!showMenu}>
        <ul type="context" id="mymenu">
          <li label="Refresh">Refresh</li>
          <li label="Twitter">Twitter</li>
        </ul>
      </div>
      <button
        onClick={handleClick}
        onDoubleClick={handleDouleClick}
        onMouseOver={handleMouseOver}
        onContextMenu={handleContextMenu}
        onMouseLeave={handleMouseLeave}
      >
        Click Me
      </button>
      <br />
      <h1>{text}</h1>
    </>
  );
}