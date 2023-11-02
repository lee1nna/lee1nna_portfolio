import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles["experience-wrap"]}>
      <div className={styles["experiences"]}>
        <div className="title">Experience.</div>
        <div className={styles["experience-box"]}>
          <div className={styles["experience"]}>
            <div className={styles["experience-title"]}>ITerview</div>
            <div className={styles["experience-period"]}>2021.06 ~ 2021.08</div>
            <div className={styles["content-wrap"]}>
              <div className={styles["left-area"]}>
                <img src="/assets/dnd_iterview_img.png" alt="" />
                <img style={{marginTop: '15px'}} src="/assets/dnd_iterview_img2.png" alt="" />
              </div>
              <div className={styles["right-area"]}>
                DND라는 대외활동에 참여하여 진행한 프로젝트입니다. <br />
                <b>백엔드 개발자와 디자이너분과 처음으로 협업</b> 을 했던
                프로젝트입니다.
                <br />
                <b>타 직군과 소통하는 방법</b>에 대해서도 깨닫게 되었고, Github를
                사용해 <br />
                <b>효율적으로 협업하는 방식</b>에 대해서도 배웠습니다.
                <br />
                <br />
                ITerview는 <b>
                  개발자 취업준비생을 위한 기술 면접 공유 서비스
                </b>{" "}
                입니다. 파편화된 기술 면접 문제를 한곳에 담아보고 싶어 시작하게
                되었습니다. <br />
                답변이 궁금한 기술 면접을 등록하고, 여러 사람들에게 답변을
                공유받을 수 있습니다. <br />
                <br />
                퀴즈 기능을 통해 면접 질문에 대해 미리 연습해 볼 수 있고
                태그별로 궁금한 면접 문제를 검색해 볼 수 있습니다.
                <hr className={styles["hr"]} />
                <div className={styles["skill-stack"]}>
                  <div className={styles["label-box"]}>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>📌 담당한 기능</div>
                        <div className={styles["skill"]}>소셜 로그인 및 유저 토큰관리, 인기있는 문제, 베스트 면접 답변, 퀴즈 기능</div>
                    </div>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>📌 Backend</div>
                        <div className={styles["skill"]}>Springboot, NGINX</div>
                    </div>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>📌 Frontend</div>
                        <div className={styles["skill"]}>React, javascript</div>
                    </div>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>📌 Database</div>
                        <div className={styles["skill"]}>Mysql</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles["experience"]}>
            <div className={styles["experience-title"]}>ITerview</div>
            <div className={styles["experience-period"]}>2021.06 ~ 2021.08</div>
            <div className={styles["content-wrap"]}>
              <div className={styles["left-area"]}>
                <img src="/assets/dnd_iterview_img.png" alt="" />
                <img style={{marginTop: '15px'}} src="/assets/dnd_iterview_img2.png" alt="" />
              </div>
              <div className={styles["right-area"]}>
                DND라는 대외활동에 참여하여 진행한 프로젝트입니다. <br />
                <b>백엔드 개발자와 디자이너분과 처음으로 협업</b> 을 했던
                프로젝트입니다.
                <br />
                <b>타 직군과 소통하는 방법</b>에 대해서도 깨닫게 되었고, Github를
                사용해 <br />
                <b>효율적으로 협업하는 방식</b>에 대해서도 배웠습니다.
                <br />
                <br />
                ITerview는 <b>
                  개발자 취업준비생을 위한 기술 면접 공유 서비스
                </b>{" "}
                입니다. 파편화된 기술 면접 문제를 한곳에 담아보고 싶어 시작하게
                되었습니다. <br />
                답변이 궁금한 기술 면접을 등록하고, 여러 사람들에게 답변을
                공유받을 수 있습니다. <br />
                <br />
                퀴즈 기능을 통해 면접 질문에 대해 미리 연습해 볼 수 있고
                태그별로 궁금한 면접 문제를 검색해 볼 수 있습니다.
                <hr className={styles["hr"]} />
                <div className={styles["skill-stack"]}>
                  <div className={styles["label-box"]}>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>📌 담당한 기능</div>
                        <div className={styles["skill"]}>소셜 로그인 및 유저 토큰관리, 인기있는 문제, 베스트 면접 답변, 퀴즈 기능</div>
                    </div>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>📌 Backend</div>
                        <div className={styles["skill"]}>Springboot, NGINX</div>
                    </div>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>📌 Frontend</div>
                        <div className={styles["skill"]}>React, javascript</div>
                    </div>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>📌 Database</div>
                        <div className={styles["skill"]}>Mysql</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
