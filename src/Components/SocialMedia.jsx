import React from "react";
import styles from "./SocialMedia.module.css";
import { BsLinkedin } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";

const SocialMedia = () => {
  return (
    <div>
      <section className={styles.socialMedia}>
        <div className={styles.wrapper}>
          <div className={`${styles.icon} ${styles.github}`}>
            <div className={styles.tooltip}>Github</div>
            <span>
              <VscGithubInverted className={styles.allIcon} />
            </span>
          </div>

          <div className={`${styles.icon} ${styles.linkedin}`}>
            <div className={styles.tooltip}>Linkedin</div>
            <span>
              <BsLinkedin className={styles.allIcon} />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;
