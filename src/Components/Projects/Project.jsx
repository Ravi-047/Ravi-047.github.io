import React from "react";
import ProjectFirst from "./ProjectFirst";
import styles from "./Project.module.css";
import ProjectSecond from "./ProjectSecond";
import ProjectThird from "./ProjectThird";
import ProjectFourth from "./ProjectFourth";
// import MiniProject from "../MiniProjects/MiniProject";

const Project = () => {
  return (
    <div>
      <section className={styles.project}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.all_projects}>
          <ProjectFirst />
          <ProjectSecond />
          <ProjectThird />
          <ProjectFourth />
          {/* <div>
            <h3>Mini Projects</h3>
            <MiniProject />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Project;
