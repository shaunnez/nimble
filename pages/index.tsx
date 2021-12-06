import type { NextPage } from "next";
import Head from "next/head";

import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}></div>
      <div className={styles.content}>
        <p>
          Aa new model production company — an aggregator, accessing the very
          best production talent, specific for your project. We’re structured to
          create everything from engaging social content, innovative digital
          concepts, high-end commercial productions right through to television
          and streamed series.
        </p>
        <p>
          We are committed to bringing the care, craft and discipline into any
          kind of project, small to large to extra large. Watch the case studies
          below to get a feel for the work we do. See what fits.
        </p>
      </div>
    </div>
  );
};

export default Home;
