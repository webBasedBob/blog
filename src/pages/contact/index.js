import Navigation from "@/components/Layout/Navigation/Navigation";
import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
import image from "../../assets/contact-us.webp";
const index = () => {
  return (
    <>
      <Navigation />
      <div className={styles.cardBackground}>
        <div className={styles.card}>
          <div className={styles.text}>
            <h1 className={styles.title}>Contact Us</h1>
            <p>
              For any suggestions or complains. please send us an email at:{" "}
            </p>
            <Link href={"mailto:hustling.insights@gmail.com"}>
              hustling.insights@gmail.com
            </Link>
          </div>
          <div className={styles.image}>
            <img src={image.src} />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
