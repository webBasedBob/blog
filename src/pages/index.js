import Navigation from "@/components/Layout/Navigation/Navigation";
import styles from "./index.module.scss";
import Hero from "@/components/Home/Hero";
import TrendingArticles from "@/components/Home/TrendingArticles";
import OurPicks from "@/components/Home/OurPicks";
import { getArticlesFromEachCategory } from "@/utils/firebaseFn";
import SectionTitle from "@/components/Home/SectionTitle";
import FollowingSphere from "@/components/Home/FollowingSphere";
import { animations, useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import Newsletter from "@/components/Home/Newsletter";
import FollowingRectangle from "@/components/Home/FollowingRectangle";
export default function Home({ ourPicksArticles, trendingArticles }) {
  const [animationState, setAnimationState] = useState({
    X: 0,
    Y: 0,
    text: "side hustler",
    carouselHeight: 0,
    widthToFill: 0,
  });
  const [tempAnimationState, setTempAnimationState] = useState({
    X: 0,
    Y: 0,
    text: "side hustler",
    carouselHeight: 0,
    widthToFill: 0,
  });
  const pulaRef = useRef();
  const isPulaInView = useInView(pulaRef);
  const [animationEnded, setAnimationEnded] = useState(true);
  const updateSphereData = (data) => {
    if (!animationState.Y) {
      setAnimationState(data);
    }
    setTempAnimationState(data);
  };
  console.log(isPulaInView);
  useEffect(() => {
    if (animationEnded && isPulaInView) {
      setAnimationState(tempAnimationState);
    }
  }, [animationEnded, setAnimationState, tempAnimationState]);
  const rectangleRef = useRef();
  const sphereRef = useRef();
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
  return (
    <>
      <div
        style={{
          opacity: 0,
          height: sphereRef.current?.scrollHeight
            ? sphereRef.current?.scrollHeight
            : rectangleRef.current?.scrollHeight + 20,
          width: sphereRef.current?.scrollWidth
            ? sphereRef.current?.scrollWidth
            : rectangleRef.current?.scrollWidth + 20,
          position: "absolute",
          top:
            tempAnimationState.Y +
            tempAnimationState.carouselHeight / 2 -
            (sphereRef.current?.scrollHeight
              ? sphereRef.current?.scrollHeight
              : rectangleRef.current?.scrollHeight) /
              10,
          backgroundColor: "red",
        }}
        ref={pulaRef}
      ></div>
      {!isSSR && viewportWidth >= 750 ? (
        <motion.div
          key={"sphere"}
          className={styles.absolutePos}
          initial={{ y: null, x: null, opacity: 0 }}
          onAnimationStart={() => {
            setAnimationEnded(false);
          }}
          onAnimationComplete={() => {
            setAnimationEnded(true);
            if (isPulaInView) {
              setAnimationState(tempAnimationState);
            }
          }}
          animate={{
            y:
              animationState.Y +
              animationState.carouselHeight / 2 -
              sphereRef.current?.scrollHeight / 5,
            x:
              animationState.X +
              (animationState.widthToFill - sphereRef.current?.scrollHeight) /
                2,
            opacity: animationState.Y ? 1 : 0,
          }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
        >
          <FollowingSphere ref={sphereRef} text={animationState.text} />
        </motion.div>
      ) : (
        <motion.div
          key={"rectangle"}
          className={styles.absolutePos}
          initial={{ y: null, x: null, opacity: 0 }}
          onAnimationStart={() => {
            setAnimationEnded(false);
          }}
          onAnimationComplete={() => {
            setAnimationEnded(true);
            setAnimationState(tempAnimationState);
          }}
          // animate={{
          //   y:
          //     animationState.Y +
          //     rectangleRef.current?.scrollHeight / 2 +
          //     animationState.carouselHeight / 2 -
          //     (animationState.carouselHeight -
          //       rectangleRef.current?.scrollHeight) /
          //       2,
          //   opacity: animationState.Y ? 1 : 0,
          // }}
          animate={{
            y:
              animationState.Y +
              animationState.carouselHeight / 2 -
              animationState.carouselHeight / 10,
            opacity: animationState.Y ? 1 : 0,
          }}
          transition={{ type: "spring", duration: 1, bounce: 0.2 }}
        >
          <FollowingRectangle ref={rectangleRef} text={animationState.text} />
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
        <SectionTitle text="our picks" />
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
