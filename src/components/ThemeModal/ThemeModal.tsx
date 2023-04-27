import { useState } from "react";
import styles from "./ThemeModal.module.scss";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  setThemeModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

// In the future use context and change styles dynamically
const themeColors = ["#3b82f6", "#ef4444 ", "#22c55e ", "#a855f7 ", "#f97316 "];

function ThemeModal({ setThemeModalToggle }: Props) {
  const handleThemeToggle = () => setThemeModalToggle(false);
  const [themeColor, setThemeColor] = useState("#3b82f6");

  return (
    <div className={styles.themeModal}>
      <div className={styles.themeModal__header}>
        <h2>Theme Settings</h2>
        <button type="button" onClick={handleThemeToggle}>
          <IoCloseSharp />
        </button>
      </div>

      <div className={styles.themeModal__options}>
        {/* Add logic to actually detect system setting, and change the theme accordingly  */}
        <h3>Theme Options</h3>
        <input type="radio" id="dark" name="theme-options" />
        <label htmlFor="dark">Dark</label>

        <input type="radio" id="light" name="theme-options" />
        <label htmlFor="light">Light</label>

        <input type="radio" id="system" name="theme-options" checked />
        <label htmlFor="system">System</label>
      </div>

      <div className={styles.themeModal__colors}>
        <h3>Theme Colors</h3>
        <div className={styles.themeModal__colors__buttons}>
          {themeColors.map((button) => {
            return (
              <button
                className={themeColor === button ? styles.active : ""}
                key={button}
                type="button"
                style={{ background: button }}
                onClick={() => setThemeColor(button)}
              ></button>
            );
          })}
          <button type="button">Custom Color</button>
        </div>
      </div>
    </div>
  );
}

export default ThemeModal;
