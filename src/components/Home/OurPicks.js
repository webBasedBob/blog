import React, { useEffect, useRef } from "react";
import ArticleSearchResult from "../ArticleResults/ArticleSearchResult";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Carousel } from "primereact/carousel";
import styles from "./OurPicks.module.scss";
import PageWrapper from "../UI/PageWrapper";
import { useInView } from "framer-motion";
const OurPicks = ({
  articleResultsSection,
  hasBackground,
  updateSphereData,
}) => {
  const responsiveOptions = [
    { breakpoint: "730px", numScroll: 1, numVisible: 1 },
    { breakpoint: "1024px", numScroll: 1, numVisible: 1 },
    { breakpoint: "1300px", numScroll: 1, numVisible: 2 },
    { breakpoint: "1600px", numScroll: 1, numVisible: 3 },
    { breakpoint: "5000px", numScroll: 1, numVisible: 4 },
  ];
  const wrapperClass = `${styles.wrapper} ${
    hasBackground ? styles.background : ""
  }`;
  const ref = useRef();
  const isInView = useInView(ref);
  useEffect(() => {
    if (!isInView || !window) {
      return;
    }
    updateSphereData({
      X: ref.current.offsetLeft,
      Y: ref.current.offsetTop + ref.current.parentElement.scrollHeight / 2,
      text: articleResultsSection.title,
      carouselHeight: ref.current.parentElement.scrollHeight,
      widthToFill: ref.current.scrollWidth,
    });
  }, [isInView]);
  return (
    <div className={wrapperClass}>
      <div ref={ref} className={styles.sectionTitle}></div>
      <div className={styles.helperWrapper}>
        <div className={styles.carouselWrapper}>
          <Carousel
            contentClassName={styles.content}
            responsiveOptions={responsiveOptions}
            circular
            value={articleResultsSection.articles}
            numScroll={1}
            numVisible={2}
            itemTemplate={ArticleSearchResult}
            className={styles.carousel}
          />
        </div>
      </div>
    </div>
  );
};

export default OurPicks;
