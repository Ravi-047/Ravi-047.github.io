import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Projects",
    },
    {
      id: 5,
      link: "Contact",
    },
    {
      id: 6,
      link: "Resume",
    },
  ];

  const handleClick = () => setClick(!click);
  const changeBackground = () => {
    if (window.scrollY > 25) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div>
        <nav
          className={
            navbar ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`
          }
        >
          <div className={styles.max_width}>
            <div className={styles.logo}>
              Ravi <span>Ranjan</span>
            </div>

            <ul
              className={
                click ? `${styles.menu} ${styles.active}` : `${styles.menu}`
              }
            >
              {links.map(({ id, link }) => (
                <li key={id}>
                  <Link to={link} smooth duration={500} className={styles.a}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.menu_icon} onClick={handleClick}>
              {click ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
