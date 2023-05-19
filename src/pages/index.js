import Navigation from "@/components/Layout/Navigation/Navigation";
import styles from "./index.module.scss";
import Hero from "@/components/Home/Hero";
import TrendingArticles from "@/components/Home/TrendingArticles";
import OurPicks from "@/components/Home/OurPicks";
import { getArticlesFromEachCategory } from "@/utils/firebaseFn";
import SectionTitle from "@/components/Home/SectionTitle";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Newsletter from "@/components/Home/Newsletter";
import Animation from "@/components/Home/Animation";
import { SEO } from "../config/constants";
import { useRouter } from "next/router";
import SEOHeader from "@/components/SEO/SEOHeader";
export default function Home({ ourPicksArticles, trendingArticles }) {
  const { asPath } = useRouter();
  const fullUrl = `https://hustlinginsights.com${asPath}`;
  const lazyLoadVideoHelper = useRef();
  const shouldLoadVideo = useInView(lazyLoadVideoHelper, { once: true });
  return (
    <>
      <SEOHeader
        title={SEO.title}
        description={SEO.description}
        fullUrl={fullUrl}
        image={SEO.image}
        caption={SEO.caption}
        linkType="website"
      />
      <Animation />
      <div className={styles.pageWrapper}>
        <Navigation animation={true} />
        <Hero />
        <div className={styles.ourPicksWrapper}>
          <SectionTitle text="Popular posts" />
          {ourPicksArticles.map((articleSection, index) => {
            return (
              <OurPicks
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
