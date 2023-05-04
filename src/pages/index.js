import Navigation from "@/components/Layout/Navigation/Navigation";
import styles from "./index.module.scss";
import Hero from "@/components/Home/Hero";
import TrendingArticles from "@/components/Home/TrendingArticles";
import OurPicks from "@/components/Home/OurPicks";
import { getArticlesFromEachCategory } from "@/utils/firebaseFn";
import SectionTitle from "@/components/Home/SectionTitle";
import FollowingSphere from "@/components/Home/FollowingSphere";
import { useInView, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
export default function Home({ ourPicksArticles, trendingArticles }) {
  const [spherePosition, setSpherePosition] = useState({ X: 0, Y: 0 });
  const [sphereText, setSphereText] = useState("");
  const updateSphereData = ({ newPosition, text }) => {
    setSpherePosition(newPosition);
    setSphereText(text);
  };
  return (
    <div className={styles.pageWrapper}>
      <Navigation animation={true} />
      <motion.div
        initial={{ y: 500, x: 100 }}
        animate={{ y: spherePosition.Y - 220, x: spherePosition.X }}
        transition={{ type: "spring", duration: 1, bounce: 0.2 }}
      >
        <FollowingSphere text={sphereText} />
      </motion.div>
      <div className={styles.scrollHelper}>
        <Hero />
        <div className={styles.ourPicksWrapper}>
          <SectionTitle text="Popular posts" />
          {/* <h3 className={styles.sectionTitle}>Popular posts</h3> */}
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
        <TrendingArticles articles={trendingArticles} />
      </div>
    </div>
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
