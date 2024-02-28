import { useContext } from "react";
import moonLight from "../assets/moon-light.svg";
import moonDark from "../assets/moon-dark.svg";
import { ThemeContext } from "../context/ThemeContext";
import { Outlet } from "react-router-dom";

const Header = ():JSX.Element => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
    <header className="flex flex-row px-8 sm:px-10 justify-between items-center h-20 shadow-sm shadow-primary-light bg-element-light dark:bg-element-dark ">
      <h1 className="font-extrabold font-nunito text-primary-light dark:text-primary-dark xs:text-sm sm:text-xl">
        Where in the world?
      </h1>
      <button className="flex flex-row items-center" onClick={toggleTheme}>
        <img
          src={darkTheme ? moonDark : moonLight}
          alt=""
          className="w-4 h-4 mr-1"
        />
        <h2 className="font-nunito font-semibold text-primary-light dark:text-primary-dark xs:text-xs sm:text-base">
          Dark Mode
        </h2>
      </button>
    </header>
    <Outlet />
    </>
  );
};

export default Header;
