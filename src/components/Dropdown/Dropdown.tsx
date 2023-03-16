import styles from "./Dropdown.module.scss";
import { HiSearch } from "react-icons/hi";
import { TextInput } from "@tremor/react";
import profileImg from "../../assets/avatar.jpg";

function Dropdown() {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown__search}>
        <TextInput icon={HiSearch} placeholder="Search..." />
      </div>
      <div className={styles.dropdown__profile}>
        <img src={profileImg} alt="" />
        <p>John</p>
      </div>
    </div>
  );
}

export default Dropdown;
