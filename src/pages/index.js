import Navigation from "@/components/Layout/Navigation/Navigation";
import styles from "./index.module.scss";
import Hero from "@/components/Home/Hero";
import TrendingArticles from "@/components/Home/TrendingArticles";
import OurPicks from "@/components/Home/OurPicks";
import { getArticlesFromEachCategory } from "@/utils/firebaseFn";
import SectionTitle from "@/components/Home/SectionTitle";
import FollowingSphere from "@/components/Home/FollowingSphere";
import { useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import Newsletter from "@/components/Home/Newsletter";
import FollowingRectangle from "@/components/Home/FollowingRectangle";
export default function Home({ ourPicksArticles, trendingArticles }) {
  const [spherePosition, setSpherePosition] = useState({ X: 0, Y: 0 });
  const [sphereText, setSphereText] = useState("side hustler");
  const [carouselHeight, setCarouselHeight] = useState(0);
  const [widthToFill, setWidthToFill] = useState(0);
  const updateSphereData = ({
    newPosition,
    text,
    carouselHeight,
    spaceToFillWidth,
  }) => {
    setSpherePosition(newPosition);
    setSphereText(text);
    setCarouselHeight(carouselHeight);
    setWidthToFill(spaceToFillWidth);
  };
  const rectangleRef = useRef();
  const [rectangleExtraY, setRectangleExtray] = useState(0);
  useEffect(() => {
    setRectangleExtray(rectangleRef.current?.scrollHeight);
  }, [rectangleRef.current?.scrollHeight]);

  const sphereRef = useRef();
  const [sphereExtraY, setSphereExtray] = useState(0);
  useEffect(() => {
    setSphereExtray(sphereRef.current?.scrollHeight);
  }, [sphereRef.current?.scrollHeight, sphereText]);

  const lazyLoadVideoHelper = useRef();
  const shouldLoadVideo = useInView(lazyLoadVideoHelper, { once: true });
  let viewportWidth;
  if (typeof window !== "undefined") {
    viewportWidth = window.innerWidth;
  }
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  console.log(spherePosition.Y, sphereExtraY, carouselHeight);
  return (
    <>
      {!isSSR && viewportWidth >= 750 ? (
        <motion.div
          className={styles.absolutePos}
          initial={{ y: 500, x: 100 }}
          animate={{
            y:
              spherePosition.Y +
              carouselHeight / 2 -
              sphereRef.current?.scrollHeight / 5,
            x:
              spherePosition.X +
              (widthToFill - sphereRef.current?.scrollHeight) / 2,
          }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
        >
          <FollowingSphere ref={sphereRef} text={sphereText} />
        </motion.div>
      ) : (
        <motion.div
          className={styles.absolutePos}
          initial={{ y: 500, x: 0 }}
          animate={{
            y:
              spherePosition.Y +
              rectangleExtraY / 2 +
              carouselHeight / 2 -
              (carouselHeight - rectangleExtraY) / 2,
          }}
          transition={{ type: "spring", duration: 0.7, bounce: 0.2 }}
        >
          <FollowingRectangle ref={rectangleRef} text={sphereText} />
        </motion.div>
      )}
      <div className={styles.pageWrapper}>
        <Navigation animation={true} />
        <Hero />
        <div className={styles.ourPicksWrapper}>
          <SectionTitle text="Popular posts" />
          {ourPicksArticles.map((articleSection, index) => {
            return (
              <OurPicks
                updateSphereData={updateSphereData}
                key={articleSection.title}
                articleResultsSection={articleSection}
                hasBackground={index % 2}
              />
            );
          })}
        </div>
        <TrendingArticles
          ref={lazyLoadVideoHelper}
          articles={trendingArticles}
        />
        <Newsletter shouldLoadVideo={shouldLoadVideo} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  //TO DO: implement a config document/collection to configure the home page, like img urls, what articles to be included ecc
  //for now, we do it like this
  // const configData = getFirestoreDocs("config");
  //if the home page config data does not exist
  //do this
  const ourPicks = await getArticlesFromEachCategory(8);
  const rawPopularArticles = await getArticlesFromEachCategory(2);
  const popularArticles = rawPopularArticles.map((obj) => obj.articles).flat();
  return {
    props: {
      ourPicksArticles: ourPicks,
      trendingArticles: popularArticles,
    },
  };
}
