import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles["about-me-wrap"]}>
      <div id="about-me" className={styles["about-me"]}>
        <div className="title">About Me.</div>
        <div className={styles["about-me-intro"]}>
          <div className={styles["about-me-icon__wrap"]}>
            <img
              className={styles["about-me__icon"]}
              src="/assets/my_icon.png"
              alt=""
            />
          </div>

          <div className={styles["intro-btn__wrap"]}>
            <button className={styles["about-me-intro__btn"]}>이한나</button>
            <button className={styles["about-me-intro__btn"]}>
              1999.02.09
            </button>
            <button className={styles["about-me-intro__btn"]}>
              dlgkssk0209@gmail.com
            </button>
            <button className={styles["about-me-intro__btn"]}>Github</button>
          </div>
        </div>

        <hr className={styles["about-me__hr"]} />
        <div className={styles["about-me__sub"]}>
          안녕하세요. <br />
          <span className="txt-line__pink">
            경험을 통해 얻어진 지식의 가치를 아는 개발자
          </span>{" "}
          이한나입니다.
          <br />
          사용자 경험을 중심으로 하는 개발자로서 <br />
          단순히 디자인을 구현하는 것 이상의 역할을 수행하고자 노력합니다.{" "}
          <br />
        </div>
        <button className={styles["about-me__more-btn"]}>더 알아보기</button>
      </div>
    </div>
  );
};

export default AboutMe;
