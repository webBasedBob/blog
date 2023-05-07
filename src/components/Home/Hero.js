import React from "react";
import styles from "./Hero.module.scss";
import PageTitle from "../UI/PageTitle";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <img src="https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/home-hero.jpg?alt=media&token=512349ed-4087-407f-a34e-7f92f0eabf3c" />
      </div>
      <PageTitle className={styles.heroTitle}>
        <span>hustling</span>
        <span> insights</span>
      </PageTitle>
      <HeroCarousel />
    </div>
  );
};

export default Hero;
