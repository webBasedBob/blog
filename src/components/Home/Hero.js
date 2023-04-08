import React from "react";
import styles from "./Hero.module.scss";
import Header from "../UI/Header";
import HeroCarousel from "./HeroCarousel";
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <img src="https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/home-hero.jpg?alt=media&token=f4d304cd-a8bc-47a8-8c44-102c9a03c3c9" />
      </div>
      <Header className={styles.heroTitle}>hustling insights</Header>
      <HeroCarousel />
    </div>
  );
};

export default Hero;
