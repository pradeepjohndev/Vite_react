import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <h2>Navbar</h2>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>
    </>
  );
}

export default Navbar;
