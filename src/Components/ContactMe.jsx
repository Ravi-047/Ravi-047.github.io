import React from "react";
import styles from "./ContactMe.module.css";
import { MdLocationOn } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import Iframe from "react-iframe";

const ContactMe = () => {
  return (
    <div>
      <section className={styles.contactMe}>
        <div className={styles.contactUs}>
          <h2 className={styles.title}>Contact Me</h2>
          <div className={styles.box}>
            {/* form  */}
            <div className={`${styles.contact} ${styles.form}`}>
              <h3>Send a Message</h3>
              <form action="">
                <div className={styles.formBox}>
                  <div className={styles.row50}>
                    <div className={styles.inputBox}>
                      <span>First Name</span>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>

                    <div className={styles.inputBox}>
                      <span>Last Name</span>
                      <input
                        type="text"
                        placeholder="Enter Your Last Name"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.row50}>
                    <div className={styles.inputBox}>
                      <span>Email</span>
                      <input
                        type="email"
                        placeholder="Enter your Email address"
                        required
                      />
                    </div>

                    <div className={styles.inputBox}>
                      <span>Mobile</span>
                      <input
                        type="number"
                        placeholder="Enter Your Mobile Number"
                      />
                    </div>
                  </div>

                  <div className={styles.row100}>
                    <div className={styles.inputBox}>
                      <span>Message</span>
                      <textarea
                        placeholder="Write your message here..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className={styles.row100}>
                    <div className={styles.inputBox}>
                      <input type="submit" value="SEND" />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* info */}
            <div className={`${styles.contact} ${styles.info}`}>
              <h3>Contact Info</h3>
              <div className={styles.infoBox}>
                <div>
                  <span>
                    <MdLocationOn />
                  </span>
                  <p>
                    Begusarai, Bihar <span className={styles.saffron}>IN</span>
                    <span className={styles.white}>D</span>
                    <span className={styles.green}>IA</span>
                  </p>
                </div>

                <div>
                  <span>
                    <HiMail />
                  </span>
                  <a href="mailto:ravi047raj@gmail.com">ravi047raj@gmail.com</a>
                </div>

                <div>
                  <span>
                    <AiFillPhone />
                  </span>
                  <a href="tel:+917061901868">+91 706 190 1868</a>
                </div>
              </div>
            </div>

            {/* map  */}
            <div className={`${styles.contact} ${styles.map}`}>
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57657.72203213018!2d86.09001377080625!3d25.417941525232123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f21acfd71c503d%3A0xb63ebca77635ae58!2sBegusarai%2C%20Bihar!5e0!3m2!1sen!2sin!4v1670392140125!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></Iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
