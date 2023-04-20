import Intro from "../UI/Intro";
import Image from "next/image";
import heroImg from "../../assets/hero.jpeg";
import ArticleImage from "./ArticleImage";
import Introduction from "./Introduction";
import TextSection from "./TextSection";
import Container from "react-bootstrap/Container";
import {
  getFirestoreArticles,
  getFirestoreDoc,
  getFirestoreRelatedArticles,
  getLiveDatabase,
  getArticle,
} from "@/utils/firebaseFn";
import { useEffect, useState } from "react";
import Title from "./Title";
export default function Article({ article2 }) {
  const [articleData, setArticleData] = useState();
  const [article, setArticle] = useState();
  async function getArticleeeee() {
    const articles = await getFirestoreArticles();
    const article = articles[Object.keys(articles)[0]];
    const articleData = Object.values(article.content);
    articleData.sort((entryA, entryB) => {
      return entryA.order - entryB.order;
    });
    setArticleData(articleData);
    getArticle();
    getFirestoreRelatedArticles("Side Hustler", ["ideas", "ai"], 5);
  }
  const getRightSectionComponent = (articleSectionData) => {
    const articleSectionsDictionary = {
      title: (
        <Title key={articleSectionData.data.title}>
          {articleSectionData.data.title}
        </Title>
      ),
      "text-section": (
        <TextSection
          key={articleSectionData.data.title}
          title={articleSectionData.data.title}
          text={articleSectionData.data.content}
        />
      ),
      "image-gallery": "",
      "image-main": (
        <ArticleImage
          key={articleSectionData.data.image}
          src={articleSectionData.data.image}
          caption={articleSectionData.data.caption}
        />
      ),
      "image-regular": "",
    };
    return articleSectionsDictionary[articleSectionData.sectionName];
  };
  useEffect(() => {
    getArticleeeee();
  }, []);
  useEffect(() => {
    if (articleData) {
      const articleJSX = [];
      articleData.forEach((section) => {
        articleJSX.push(getRightSectionComponent(section));
      });
      setArticle(articleJSX);
    }
  }, [articleData]);
  return (
    <Container>
      {/* <Hero title={article.title} intro={article.intro} />
      <Introduction fullIntro={article.fullIntro} />
      {article.sections.map((section) => {
        return (
          <Section
            text={section.text}
            title={section.title}
            key={section.title}
          />
        );
      })} */}
      {article}
    </Container>
  );
}
