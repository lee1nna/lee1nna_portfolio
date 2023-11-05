import styles from "./Header.module.css";

const Header = () => {
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
          <a href="#contact">
            <li className={styles["header-li"]}>Contact</li>
          </a>
        </div>
        <img className={styles["hamburger"]} src="/assets/hamburger.png" alt="" />
        <div className={styles["burger-menu"]}>
          <div className={styles["burger-menu__item"]}>About Me</div>
          <div className={styles["burger-menu__item"]}>Skills</div>
          <div className={styles["burger-menu__item"]}>Career</div>
          <div className={styles["burger-menu__item"]}>Experience</div>
          <div className={styles["burger-menu__item"]}>Contact</div>
        </div>
      
      </ul>
    </div>
  );
};

export default Header;
