import Navigation from "@/components/Layout/Navigation/Navigation";
import Article from "@/components/Article/Article";
import Row from "react-bootstrap/Row";
import SuggestedArticles from "@/components/SuggestedArticles/SuggestedArticles";
import PageWrapper from "@/components/UI/PageWrapper";
import {
  getArticle,
  getFirestoreArticles,
  getFirestoreRelatedArticles,
} from "@/utils/firebaseFn";
import SEOHeader from "@/components/SEO/SEOHeader";

export default function ArticlePage({ article, suggestedArticles }) {
  const articleContent = Object.values(article.content);
  const title = articleContent.find((elm) => elm.sectionName === "title").data
    .title;
  const description =
    articleContent.find((elm) => elm.sectionName === "description")?.data
      .content || "";
  const image = articleContent.find(
    (elm) => elm.sectionName === "image-main"
  ).data;

  const richGoogleResultData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${title}`,
    image: `${[image.image]}`,
    datePublished: `${dateObjToSeoStr(article.metaData.date)}T00:00:00+00:00`,
    dateModified: `${dateObjToSeoStr(article.metaData.date)}T00:00:00+00:00`,
    author: [
      {
        "@type": "Organization",
        name: "Hustling Insights",
        url: "https://hustlinginsights.com",
      },
    ],
  };

  return (
    <>
      <SEOHeader
        title={title}
        description={description}
        fullUrl={article.fullUrl}
        image={image.image}
        caption={image.caption}
        linkType="article"
        richGoogleResultData={richGoogleResultData}
      />
      <Navigation />
      <PageWrapper>
        <Row>
          <Article article={article} />
        </Row>
        <Row>
          <SuggestedArticles articles={suggestedArticles}></SuggestedArticles>
        </Row>
      </PageWrapper>
    </>
  );
}

import fs from "fs";
import { EOL } from "os";
import { dateObjToSeoStr } from "@/utils/helperFn";

export async function getStaticPaths() {
  //this creates the sitemap file with default links
  const constantLinks = [
    "https://hustlinginsights.com/",
    "https://hustlinginsights.com/about",
    "https://hustlinginsights.com/contact",
  ];
  fs.writeFile("./public/sitemap.txt", constantLinks.join(EOL), () => {});
  const allBlogPosts = await getFirestoreArticles();
  const paths = allBlogPosts.map((article) => {
    return { params: { url: article.url } };
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const {
    params: { url },
  } = context;
  //this populates the sitemap file with the links of all the articles
  const fullUrl = `https://hustlinginsights.com/article/${url}`;
  fs.writeFile(
    "./public/sitemap.txt",
    fullUrl + EOL,
    {
      flag: "a+",
    },
    () => {}
  );

  const article = await getArticle(url);
  article.fullUrl = fullUrl;
  // article.metaData.date = article.metaData.date.seconds;
  const suggestedArticles = await getFirestoreRelatedArticles(
    article.metaData.label,
    article.metaData.tags,
    4
  );
  return {
    props: { article: article, suggestedArticles: suggestedArticles },
  };
}
