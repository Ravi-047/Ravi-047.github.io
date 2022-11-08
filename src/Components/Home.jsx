import React from "react";
import styles from "./Home.module.css";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <div>
      <section className={styles.home}>
        <div>
          <SocialLinks />
        </div>
        <div className={styles.max_width}>
          <div className={styles.home_content}>
            <div className={styles.text_1}>Hello, my name is</div>
            <div className={styles.text_2}>Ravi Ranjan Ram</div>
            <div className={styles.text_3}>
              And I'm a <span>Full Stack Web Developer</span>
            </div>
            <button className={styles.hire_me}>Hire me</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
