import { useState } from "react";
import "./Toggle.css";

export const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label>
      <input
        type="checkbox"
        className="togle"
        defaultChecked={isToggled}
        onClick={callback}
      />
      <span />
    </label>
  );
};
