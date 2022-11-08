import React from "react";
import styles from "./TechSkills.module.css";

//importing skill image;
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import reactImage from "../assets/skills/react.png";
import graphql from "../assets/skills/graphql.png";
import github from "../assets/skills/github.png";
import tailwind from "../assets/skills/tailwind.png";

const TechSkills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "rgb(255,86,34) 0px 5px 15px",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "rgb(0,212,242) 0px 5px 15px",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "rgb(255,214,0) 0px 5px 15px",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "rgb(1,122,254)0px 5px 15px",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "rgb(201,0,249) 0px 5px 15px",
    },
    {
      id: 6,
      src: graphql,
      title: "GraphQL",
      style: "rgb(255,86,34) 0px 5px 15px",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "rgb(251,252,255)0px 5px 15px",
    },
  ];

  return (
    <div>
      <section className={`${styles.tech} ${styles.section_tech}`}>
        <div className={styles.max_width}>
          <h2 className={styles.title}>Techinal Skills</h2>
          <div className={styles.tech_content}>
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={styles.each_skills}
                style={{ boxShadow: style }}
              >
                <img src={src} alt="" />
                <p className={styles.skill_title}>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechSkills;
