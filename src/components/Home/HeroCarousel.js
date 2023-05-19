import React, { useState } from "react";
import styles from "./HeroCarousel.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const data = [
    {
      title: "Entrepreneur Hustler",
      text: "Section dedicated to present or future entrepreneurs. Here you find valuable insights on a range of topics: startups, marketing, finance, business ideas.",
    },
    {
      title: "Side Hustler",
      text: "Section dedicated to hustlers that want to make some extra cash. Here you find valuable insights on a range of topics: side hustle ideas, success tactics, tips, tricks and hacks.",
    },
    {
      title: "Corporate Hustler",
      text: "Section dedicated to those that want to climb the corporate ladder. Here you find valuable insights on a range of topics: productivity, office politics, negociation",
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
          <Carousel.Item key={pula.title} className={styles.carouselItem}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className={styles.cariuselText}>{pula.text}</div>
              <h2 className={styles.carouselTitle}>{pula.title}</h2>
            </motion.div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HeroCarousel;
