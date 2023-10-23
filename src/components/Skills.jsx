import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles["skills-wrap"]}>
      <div className={styles["skills"]}>
        <div className="title">Skills.</div>
        <div className={styles["skills-wrap"]}>
          <div className={styles["skill"]}>
            <div className={styles["skill-title"]}>Front-end</div>
            <img src="/assets/html.png" height='90' alt="" />
            <img src="/assets/css.png" height='90' alt="" />
            <img src="/assets/vue.png" height='80' alt="" />
            <img src="/assets/nuxt.png" height='50' alt="" />
            <img src="/assets/react.png" height='90' alt="" />
            <img src="/assets/next.svg" height='70'alt="" />
          </div>
          <div className={styles["skill"]}>
          <div className={styles["skill-title"]}>Version Control</div>
          </div>
          <div className={styles["skill"]}>
          <div className={styles["skill-title"]}>Version Control</div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
