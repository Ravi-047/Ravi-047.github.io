import React from "react";
import styles from "./ProjectFirst.module.css";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProjectStyle.css";

import img1 from "./News_app/1_home.png";
import img2 from "./News_app/2_headlines.png";

const ProjectSecond = () => {
  const slide = [img1, img2, img1, img2, img1, img2];

  return (
    <div>
      <section className={styles.project__1}>
        <div>
          <h2 className={styles.project_title}>Project Second</h2>
          <div
            className={`${styles.single_project} ${styles.reverse_column_direction}`}
          >
            <div className={styles.img_slider}>
              <Carousel autoPlay infiniteLoop>
                {slide.map((item, i) => (
                  <img key={i} src={item} alt="slider_img" />
                ))}
              </Carousel>
            </div>
            <div className={styles.project_dis}>
              <h3>About Project</h3>
              <p>
                The comprehensive news portal covers all the latest developments
                on a real-time basis in the fields of politics, sports,
                business, lifestyle, entertainment and even local city issues,
                offering you a complete perspective of your world
              </p>
              <h3>Tech Stack</h3>
              <p>
                REACT | REACT-ROUTER-DOM | CHAKRA UI | REACT-ICON | JSON-SERVER
              </p>
              <h3>Role</h3>
              <p>
                A collaborative project built by a team of 6, executed in 5
                days. I built Login/Signup functionaity and Contact page.
              </p>
              <div className={styles.source_live}>
                <a href="./" target="_blank" rel="noopener noreferrer">
                  <button className={styles.source_git}>
                    <FaGithub className={styles.icon_style} />
                    <span> Source Code</span>
                  </button>
                </a>

                <a href="./" target="_blank" rel="noopener noreferrer">
                  <button className={styles.source_git}>
                    <BiLinkExternal className={styles.icon_style} />
                    <span> Live</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSecond;
