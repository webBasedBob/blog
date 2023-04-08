import React, { useState } from "react";
import styles from "./HeroCarousel.module.scss";
import Carousel from "react-bootstrap/Carousel";

const CarouselItem = React.forwardRef(({ title, text }, ref) => {
  return (
    <Carousel.Item ref={ref} className={styles.carouselItem}>
      <div className={styles.cariuselText}>{text}</div>
      <h2 className={styles.carouselTitle}>{title}</h2>
    </Carousel.Item>
  );
});

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const data = [
    {
      title: "Entrepreneur Hustler",
      text: "We provide valuable insights and advice on a range of topics, including startup advice, marketing, finance, and more. Whether you're a seasoned entrepreneur or just starting out, our blog has something for everyone.",
    },
    {
      title: "Side Hustler",
      text: "We are a go-to resource side hustle ideas and insights. Start exploring our blog today and learn how to increase your financial stability through side hustles.",
    },
    {
      title: "Employed Hustler",
      text: "Employed hustlers, we did not forget you. Our content is designed to help you improve your skills and build the confidence you need to take on new challenges in the workplace.",
    },
  ];
  return (
    <Carousel
      className={styles.carousel}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {data.map((pula) => {
        return (
          <Carousel.Item className={styles.carouselItem}>
            <div className={styles.cariuselText}>{pula.text}</div>
            <h2 className={styles.carouselTitle}>{pula.title}</h2>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HeroCarousel;
