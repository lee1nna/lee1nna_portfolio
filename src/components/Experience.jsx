import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div id="experience" className={styles["experience-wrap"]}>
      <div className={styles["experiences"]}>
        <div className="title">Experience.</div>
        <div className={styles["experience-box"]}>
          <div className={styles["experience"]}>
            <div className={styles["experience-title"]}>ITerview</div>
            <div className={styles["experience-period"]}>2021.06 ~ 2021.08</div>
            <div className={styles["content-wrap"]}>
              <div className={styles["left-area"]}>
                <img src="./assets/dnd_iterview_img.png" alt="" />
                <img style={{marginTop: '15px'}} src="./assets/dnd_iterview_img2.png" alt="" />
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
                        <div className={styles["label"]}>• 담당한 기능</div>
                        <div className={styles["skill"]}>소셜 로그인 및 유저 토큰관리, 인기있는 문제, 베스트 면접 답변, 퀴즈 기능</div>
                    </div>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>• Backend</div>
                        <div className={styles["skill"]}>Springboot, NGINX</div>
                    </div>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>• Frontend</div>
                        <div className={styles["skill"]}>React, javascript</div>
                    </div>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>• Database</div>
                        <div className={styles["skill"]}>Mysql</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["experience"]}>
            <div className={styles["experience-title"]}>툰툰이</div>
            <div className={styles["experience-period"]}>2020.03 ~ 2020.11</div>
            <div className={styles["content-wrap"]}>
              <div className={styles["left-area"]}>
                <img src="./assets/toontooni.png" alt="" />
              </div>
              <div className={styles["right-area"]}>
                대학교 졸업작품으로 진행한 프로젝트입니다. <br />
                툰툰이는 <b>개인화 요소를 이용해 웹툰을 추천해주는 서비스</b> 입니다.
                <br />
                추천서비스가 다방면에 활용됨에 따라 웹툰에도 추천 서비스가 있으면 좋을 것 같다는
                생각에서 시작하게 되었습니다.
                <br />
                <br />
                사용자의 성별, 나이, 직업, 선호 웹툰 3가지와 그에 따른 평점을 입력하면
                나와 유사한 사용자가 선호하는 웹툰을 추천해 줄 수 있습니다.
                <br />
                추천 서비스 로직을 직접 구현하였고, 추천 시스템에 사용되는 UBCF 방식과
                IBCF의 차이에 대해 알게 되었습니다.
                <hr className={styles["hr"]} />
                <div className={styles["skill-stack"]}>
                  <div className={styles["label-box"]}>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>• 담당한 기능</div>
                        <div className={styles["skill"]}>추천서비스 로직 구현</div>
                    </div>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>• Backend</div>
                        <div className={styles["skill"]}>Python, Flask</div>
                    </div>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>• Frontend</div>
                        <div className={styles["skill"]}>html, css</div>
                    </div>
                    <div className={styles["skill-row"]}>
                        <div className={styles["label"]}>• Database</div>
                        <div className={styles["skill"]}>mongoDB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
