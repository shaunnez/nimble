import type { NextPage } from "next";

import styles from "./contact.module.css";

const Contact: NextPage = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.form}>
        <p>Tell us about your project</p>
        <form>
          <div className={styles.row}>
            <label>Budget (if known):</label>
            <input type="number" placeholder="Type here" name="budget" />
          </div>
          <div className={styles.row}>
            <label>Name:</label>
            <input type="text" placeholder="Type here" name="name" />
          </div>
          <div className={styles.row}>
            <label>Email:</label>
            <input type="text" placeholder="Type here" name="email" />
          </div>
          <div className={styles.row}>
            <label>Contact Number:</label>
            <input type="text" placeholder="Type here" name="phone" />
          </div>
          <div className={styles.row}>
            <button type="button">Submit</button>
          </div>
        </form>
      </div>
      <div className={styles.content}>
        <p>Get in touch</p>
        <p>
          Sally Lankshear
          <br />
          Head of Production
          <br />
        </p>
        <p>
          <a href="Sally@nimble.productions">Sally@nimble.productions</a>
          <br />
          <a href="tel:+642108857103">+64 (0)210 885 7103</a>
        </p>

        <p>—</p>

        <p>
          Ground Level
          <br />
          34 — 38 Drake Street
          <br />
          Auckland Central 1010
          <br />
          New Zealand
        </p>
      </div>
      <div className={styles.spacer} />
    </div>
  );
};

export default Contact;
