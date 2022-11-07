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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam, non. Facilis repellat ea molestias labore odit sequi
                totam, reprehenderit repellendus quis voluptas earum, magnam
                provident necessitatibus recusandae velit ab exercitationem
                dolores, iusto neque at consequatur voluptate cupiditate
                laborum. Qui repudiandae ad perspiciatis beatae architecto alias
                tenetur nulla, pariatur amet dolores accusantium, neque ratione
                placeat consequuntur quae ipsum quod minima quas.
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
