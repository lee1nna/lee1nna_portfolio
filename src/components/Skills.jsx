import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div id="skill" className={styles["skills-wrap"]}>
      <div className={styles["skills"]}>
        <div className="title">Skills.</div>
        <div className={styles["skills-wrap"]}>
          <div className={styles["skill"]}>
            <div className={styles["skill-title"]}>Front-end</div>
            <img src="/assets/html.png" height="80" alt="" />
            <img src="/assets/css.png" height="80" alt="" />
            <img src="/assets/js.png" height="80" alt="" />
            <img src="/assets/vue.png" height="80" alt="" />
            <img src="/assets/nuxt.png" height="50" alt="" />
            <img src="/assets/react.png" height="90" alt="" />
            <img src="/assets/next.svg" height="70" alt="" />
          </div>
          <div>
            <div className={`${styles["skill"]} ${styles["skill2"]}`}>
              <div className={styles["skill-title"]}>Version Control</div>
              <img
                src="/assets/github.png"
                height="70"
                alt=""
                style={{ marginTop: "0 !important" }}
              />
              <img src="/assets/git.png" height="45" alt="" />
            </div>
            <div className={`${styles["skill"]} ${styles["skill3"]}`}>
              <div className={styles["skill-title"]}>Etc</div>
              <img
                src="/assets/firebase.png"
                height="50"
                alt=""
                style={{ marginBottom: "20px" }}
              />
              <img
                src="/assets/strapi.png"
                height="40"
                alt=""
                style={{ marginBottom: "20px" }}
              />
              <img src="/assets/react-native.png" height="35" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
