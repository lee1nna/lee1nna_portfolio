import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <ul className={styles["header-ul"]}>
        <div className={styles["header-li-title"]}>Leehanna's Portfolio</div>
        <div className={styles["header-li-wrap"]}>
          <li className={styles["header-li"]}>About Me</li>
          <li className={styles["header-li"]}>Skills</li>
          <li className={styles["header-li"]}>Experience</li>
          <li className={styles["header-li"]}>Contact</li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
