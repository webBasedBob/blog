import Navigation from "@/components/Layout/Navigation/Navigation";
import styles from "./index.module.scss";
import Hero from "@/components/Home/Hero";
import TrendingArticles from "@/components/Home/TrendingArticles";
import OurPicks from "@/components/Home/OurPicks";
import { getArticlesFromEachCategory } from "@/utils/firebaseFn";

export default function Home({ ourPicksArticles, trendingArticles }) {
  return (
    <>
      <Navigation animation={true} />
      <Hero />
      <div className={styles.ourPicksWrapper}>
        <h3 className={styles.sectionTitle}>Popular posts</h3>
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
      <TrendingArticles articles={trendingArticles} />
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
