import { React, useEffect, useState } from "react";
import lightbtn from "../../assets/Website/light-mode-button.png";
import darkbtn from "../../assets/Website/dark-mode-button.png";

export default function DarkMode() {
  const [theme, settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className=" relative">
      <img
        onClick={() => settheme(theme === "light" ? "dark" : "light")}
        src={lightbtn}
        alt=""
        className={
          " w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10"
        }
      />
      <img
        onClick={() => settheme(theme === "light" ? "dark" : "light")}
        src={darkbtn}
        alt=""
        className=" w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
}
