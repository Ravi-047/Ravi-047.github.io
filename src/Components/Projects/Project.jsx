import React from "react";
import ProjectFirst from "./ProjectFirst";
import styles from "./Project.module.css";

const Project = () => {
  return (
    <div>
      <section className={styles.project}>
        <h2 className={styles.title}>Projects</h2>
        <div>
          <ProjectFirst />
        </div>
      </section>
    </div>
  );
};

export default Project;
