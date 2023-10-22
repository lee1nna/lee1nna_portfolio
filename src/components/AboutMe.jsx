import styles from './AboutMe.module.css'

const AboutMe = () => {
    return (
        <div className={styles['about-me-wrap']}>
            <div className={styles['about-me']}>
                <img className={styles['about-me__icon']} src="/assets/my_icon.png" alt="" />
                <div className={styles['about-me__title']}>
                    -이한나- <br/>
                    프론트앤드 개발자 포트폴리오
                </div>
                <hr className={styles['about-me__hr']}/>
                <div className={styles['about-me__sub']}>
                안녕하세요. <br/>
                경험을 통해 얻어진 지식의 가치를 아는 개발자 이한나입니다.<br/>
                사용자 경험을 중심으로 하는 개발자로서 <br/>
                단순히 디자인을 구현하는 것 이상의 역할을 수행하고자 노력합니다. <br/>
                </div>
                <button className={styles['about-me__more-btn']}>더 알아보기</button>
            </div>
        </div>
    )
}

export default AboutMe