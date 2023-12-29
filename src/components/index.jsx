import useLocalStorage from "./useLocalStorage";
import "./style.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleThemeChange() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleThemeChange}>Change Theme</button>
      </div>
    </div>
  );
}
