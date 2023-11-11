import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-wrap"]}>
        <div className={styles["footer__text"]}>
          Designed & Developed By Leehanna
        </div>
      </div>
    </div>
  );
};

export default Footer;
