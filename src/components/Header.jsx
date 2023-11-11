import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <div className={styles["header"]}>
      <ul className={styles["header-ul"]}>
        <div className={styles["header-li-title"]}>Leehanna's Portfolio</div>
        <div className={styles["header-li-wrap"]}>
          <a href="#about-me">
            <li className={styles["header-li"]}>About Me</li>
          </a>
          <a href="#skill">
            <li className={styles["header-li"]}>Skills</li>
          </a>
          <a href="#career">
            <li className={styles["header-li"]}>Career</li>
          </a>
          <a href="#experience">
            <li className={styles["header-li"]}>Experience</li>
          </a>
        </div>
        <img
          className={styles["hamburger"]}
          src="./assets/hamburger.png"
          alt=""
          onClick={handleMenu}
        />
        <div
          className={styles["burger-menu"]}
          style={activeMenu ? { display: "block" } : { display: "none" }}
        >
          <a href="#about-me">
            <div className={styles["burger-menu__item"]}>About Me</div>
          </a>
          <a href="#skill">
            <div className={styles["burger-menu__item"]}>Skills</div>
          </a>
          <a href="#career">
            <div className={styles["burger-menu__item"]}>Career</div>
          </a>
          <a href="#experience">
            <div className={styles["burger-menu__item"]}>Experience</div>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Header;
