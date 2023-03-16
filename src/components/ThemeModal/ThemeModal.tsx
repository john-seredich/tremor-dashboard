import styles from "./ThemeModal.module.scss";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  setThemeModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

function ThemeModal({ setThemeModalToggle }: Props) {
  const handleThemeToggle = () => setThemeModalToggle(false);

  return (
    <div className={styles.themeModal}>
      <div className={styles.themeModal__header}>
        <h2>Theme Settings</h2>
        <button type="button" onClick={handleThemeToggle}>
          <IoCloseSharp />
        </button>
      </div>
    </div>
  );
}

export default ThemeModal;
