import React from "react";
import styles from "./About.module.css";
import profile_ravi from "../assets/profile_ravi.png";

const About = () => {
  return (
    <div>
      <section className={`${styles.about} ${styles.section_about}`}>
        <div className={styles.max_width}>
          <h2 className={styles.title}>About me</h2>
          <div className={styles.about_content}>
            <div className={`${styles.column} ${styles.left}`}>
              <img src={profile_ravi} alt="profile_ravi" />
            </div>

            <div className={`${styles.column} ${styles.right}`}>
              <div className={styles.text}>
                I'm Ravi Ranjan Ram and I'm a <span>Developer</span>
              </div>
              <p>
                A full stack web developer having knowledge in Data Structure,
                Algorithms, and Programming languages. Knowing JavaScript, HTML,
                CSS, React, Redux, Mern Stack, MongoDB and Chakra UI, I have
                made some solo and collaborative projects and continue to have
                some experience as well as acquiring more knowledge. Now I'm
                looking forward to enhance my skills in a challenging work
                environment.
              </p>
              <button className={styles.cv}>Download CV</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
