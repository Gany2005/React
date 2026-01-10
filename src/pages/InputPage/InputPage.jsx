import { NavLink } from "react-router-dom";
import { FirstComponent } from "../../components/FirstComponent/FirstComponent";
import { InputComponent } from "../../components/InputComponent/InputComponent";

export function InputPage() {
  return (
    <>
      <InputComponent />
      <FirstComponent />

      <NavLink to="/" end>
        Go To Home Page
      </NavLink>
    </>
  );
}
