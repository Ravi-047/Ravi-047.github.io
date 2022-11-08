import React from "react";
import styles from "./TechSkills.module.css";

const TechSkills = () => {
  return (
    <div>
      <section className={`${styles.tech}`}>
        <div className={styles.max_width}>
          <h2 className={styles.title}>Tech Skills</h2>
          <div className={styles.tech_content}></div>
        </div>
      </section>
    </div>
  );
};

export default TechSkills;
