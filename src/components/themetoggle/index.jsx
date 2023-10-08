import { WiMoonAltWaningCrescent4, WiDaySunny } from "react-icons/wi";

const Themetoggle = ({ themeToggle, theme }) => {
  return (
    <div className="nav_ac" onClick={themeToggle}>
      {(theme === "dark" ? <WiMoonAltWaningCrescent4 /> : <WiDaySunny />)}
    </div>
  );
};

export default Themetoggle;
