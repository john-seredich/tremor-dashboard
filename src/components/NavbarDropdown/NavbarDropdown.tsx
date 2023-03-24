import { useState } from "react";
import styles from "./NavbarDropdown.module.scss";
import { HiSearch } from "react-icons/hi";
import { TextInput } from "@tremor/react";
import profileImg from "../../assets/avatar.jpg";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

function NavbarDropdown() {
  const [profileToggle, setProfileToggle] = useState(false);
  const handleProfileToggle = () =>
    setProfileToggle((prevToggle) => !prevToggle);

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown__search}>
        <TextInput icon={HiSearch} placeholder="Search..." />
      </div>
      <button
        type="button"
        className={styles.dropdown__profile}
        onClick={handleProfileToggle}
      >
        <img src={profileImg} alt="" />
        <p>John</p>
      </button>
      {profileToggle && <ProfileDropdown />}
    </div>
  );
}

export default NavbarDropdown;
