import React from "react";
import styles from "./TechSkills.module.css";

//importing skill image;
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import reactImage from "../assets/skills/react.png";
import github from "../assets/skills/github.png";
import tailwind from "../assets/skills/tailwind.png";
import chakra from "../assets/skills/chakraUI.png";
import git from "../assets/skills/Git.png";
import express from "../assets/skills/expressjs.png";
import heroku from "../assets/skills/heroku.png";
import mongodb from "../assets/skills/mongodb.svg";
import mongoose from "../assets/skills/mongoose.png";
import postman from "../assets/skills/postman.png";
import redux from "../assets/skills/Redux.png";
import typescript from "../assets/skills/typescript-logo.svg";
import rapidapi from "../assets/skills/rapidapi.webp";

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
      style: "rgb(1,122,254) 0px 5px 15px",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "rgb(251,252,255) 0px 5px 15px",
    },
    {
      id: 7,
      src: chakra,
      title: "Chakra UI",
      style: "rgb(108,202,206) 0px 5px 15px",
    },
    {
      id: 8,
      src: git,
      title: "Git",
      style: "rgb(240,80,51) 0px 5px 15px",
    },
    {
      id: 9,
      src: express,
      title: "Express.JS",
      style: "rgb(57,39,163) 0px 5px 15px",
    },
    {
      id: 10,
      src: heroku,
      title: "Heroku",
      style: "rgb(65,0,153) 0px 5px 15px",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDb",
      style: "rgb(19,170,82) 0px 5px 15px",
    },
    {
      id: 12,
      src: mongoose,
      title: "Mongoose",
      style: "rgb(137,0,0) 0px 5px 15px",
    },
    {
      id: 13,
      src: postman,
      title: "Postman",
      style: "rgb(255,108,55) 0px 5px 15px",
    },
    {
      id: 14,
      src: rapidapi,
      title: "RapidAPI",
      style: "rgb(0,85,217) 0px 5px 15px",
    },
    {
      id: 15,
      src: redux,
      title: "Redux",
      style: "rgb(118,74,188) 0px 5px 15px",
    },
    {
      id: 16,
      src: typescript,
      title: "TypeScript",
      style: "rgb(0,122,204) 0px 5px 15px",
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
