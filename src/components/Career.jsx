import styles from "./Career.module.css";

const Experience = () => {
  return (
    <div id='career' className={styles["career-wrap"]}>
      <div className={styles["career"]}>
        <div className="title">Career.</div>
        <div className={styles["career-wrap"]}>
          <div className={styles["left-area"]}>
            <div className={styles["company-logo"]}>
              <img src="/assets/weeds.png" alt="" />
            </div>
          </div>
          <div className={styles["right-area"]}>
            <div className={styles["company-name"]}>
              (주) 위즈커뮤니케이션즈
            </div>
            <div className={styles["company-period"]}>2021.11 - 현재</div>
            <div className={styles["company-desc"]}>
              다양한 고객사와 협업하며 기획부터 개발 및 유지보수까지
              <br />
              <b>
                {" "}
                IT 솔루션 공급에 필요한 모든 영역에서의 기술력을 제공하는 기업
              </b>
              입니다.
              <br />
              <br />
              <b>웹 프론트엔드 개발을 담당</b>하고 있으며, 주로 Nuxt와 Vue
              프레임워크를 사용해 개발을 진행해 왔습니다. 현재는 기술 스택을
              변경중에 있어 사내에서 사용하는 공통 컴포넌트와 가이드 페이지를
              <b> Next로 재개발 작업을 진행</b>했습니다. 고객사와 직접 소통하여
              <b> 요구사항을 도출</b>하거나, 신입 개발자의
              <b> 사수 역할</b>도 함께 담당하고 있습니다.
            </div>
            <div className={styles["company-project"]}>
              <br />
              <b>📌 어드민 스타터 + 사내 공통 컴포넌트</b>
              <br />
              <div className={styles["period"]}>
              🗓 2019.02 ~ 2021.02
              </div>
              <ul>
                <li>어드민 페이지의 빠른 개발을 위해 주요 기능 모듈화</li>
                <li>어드민 페이지 내에서 사용되는 공통 컴포넌트 개발</li>
                <li>기존 스타터와 공통 컴포넌트 리라이팅 진행</li>
                <li>회사 내부 기술 스택 변경으로 인해 Next 점진적 도입</li>
              </ul>
            </div>
            <div className={styles["company-project"]}>
              <br />
              <b>📌 CCTV 관제 웹페이지</b>
              <br />
              <div className={styles["period"]}>
              🗓 2021.12 ~ 2022.01
              </div>
              <ul>
                <li>CCTV 장비 관리 및 설치된 CCTV를 관제하는 웹페이지 개발</li>
                <li>Hls.js를 사용해 최대 9개의 CCTV 라이브 스트리밍 제공</li>
                <li>Firebase 호스팅을 사용해 웹 페이지 배포</li>
              </ul>
            </div>
            <div className={styles["company-project"]}>
              <br />
              <b>📌 설문 관리 어드민 및 온라인 설문 서비스</b>
              <br />
              <div className={styles["period"]}>
              🗓 2023.01 ~ 2023.05
              </div>
              <ul>
                <li>메인 개발자로 참여하여 프로젝트 구조 설계, 공통 컴포넌트 개발 및 가이드 페이지 제작</li>
                <li>데이터 탐색의 어려움 해소를 위해 테이블 열 편집 기능을 넣어 사용자 경험 개선</li>
                <li>기존 상태관리 솔루션 Vuex의 복잡한 API 사용법 개선과 모듈식 설계를 위해 Pinia 도입</li>
              </ul>
            </div>
            <div className={styles["company-project"]}>
              <br />
              <b>📌 소상공인을 위한 간편 키오스크 설치 서비스</b>
              <br />
              <div className={styles["period"]}>
              🗓 2022.02 ~ 2022.03
              </div>
              <ul>
                <li>Firebase를 연동해 Firebase Storage에 저장된 컨텐츠 이미지 및 영상 조회 기능 개발</li>
                <li>Timestamp를 사용해 만료 시간이 있는 웹 링크를 개발</li>
              </ul>
            </div>
            <div className={styles["company-project"]}>
              <br />
              <b>📌 연주자 프로필 및 포트폴리오 공유 웹 서비스</b>
              <br />
              <div className={styles["period"]}>
              🗓 2022.01 ~ 2022.06
              </div>
              <ul>
                <li>Headerless CMS strapi를 사용하여 백엔드를 대체 하면서 DB 설계 및 엔티티 도출 참여</li>
                <li>기획 및 요구사항에 대한 누락 사항을 외부 기획자와 직접 적극적으로 협의해 개선 및 보완</li>
                <li>카카오톡 공유 sdk를 사용한 명함 공유 기능 개발</li>
              </ul>
            </div>
            <div className={styles["company-project"]}>
              <br />
              <b>📌 공무원연금공단 신원인증 모바일 플랫폼</b>
              <br />
              <div className={styles["period"]}>
              🗓 2022.01 ~ 2022.06
              </div>
              <ul>
                <li>파일 빌드 후 안드로이드 스튜디오에 포팅해 apk로 변환</li>
                <li>웹 뷰 화면 개발 및 이슈 수정을 위해 Chrome inspect를 사용해 디버깅</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
