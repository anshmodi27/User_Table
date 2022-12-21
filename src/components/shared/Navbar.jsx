import classNames from "classnames";
import React, { useState } from "react";
import { SiSuperuser } from "react-icons/si";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import DarkMode from "../DarkMode";

const navClass =
  "flex flex-col rounded-xl items-center gap-x-10 h-30 text-lg px-20 sm:flex-row sm:h-20 sm:justify-between sm:rounded-2xl";
const flexLink = "flex items-center gap-x-12 mt-5 mb-2 sm:mt-0 sm:mb-0";
const textClass = "text-xl  text-[#171717]  dark:text-[#F9F9F9]";
const bgClass = "bg-[#F9F9F9] dark:bg-[#171717]";
const shadowClass =
  "shadow-inner shadow-3xl shadow-black dark:shadow-inner dark:shadow-3xl dark:shadow-white";

const Navbar = () => {
  const [colorTheme, setTheme] = DarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className="pt-4 mx-10">
      <nav className={classNames(navClass, textClass, bgClass, shadowClass)}>
        <div className="mt-3 sm:mt-0 sm:mb-0">
          <SiSuperuser fontSize={40} />
        </div>
        <div>
          <ul className={classNames(flexLink)}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/adddata"}>Add</Link>
            </li>
            <li>
              <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
                moonColor={"#F9F9F9"}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
