import { NavLink, useNavigate } from "react-router-dom";
import { CalculateAge } from "../../components/CalculateAge/calculateAge";
import { useCallback } from "react";

export function HomePage() {
  const navigate = useNavigate();

  const handleOnClick = useCallback(
    (event) => {
      event.preventDefault();
      navigate("/input");
    },
    [navigate]
  );
  return (
    <>
      <CalculateAge />

      <NavLink to="/input" end>
        Go To Input Page
      </NavLink>
        
        <br/>
        <br/>

      <button onClick={handleOnClick}> Go To Input Page </button>
    </>
  );
}
