import Intro from "../UI/Intro";
import Image from "next/image";
import heroImg from "../../assets/hero.jpeg";
import ArticleImage from "./ArticleImage";
import Introduction from "./Introduction";
import TextSection from "./TextSection";
import Container from "react-bootstrap/Container";
import { getLiveDatabase } from "@/utils/firebaseFn";
import { useEffect, useState } from "react";
import Title from "./Title";
export default function Article({ article2 }) {
  const [articleData, setArticleData] = useState();
  const [article, setArticle] = useState();
  async function getArticle() {
    const articles = await getLiveDatabase("articles/");
    const article = articles[Object.keys(articles)[0]];
    const articleData = Object.values(article.content);
    articleData.sort((entryA, entryB) => {
      return entryA.order - entryB.order;
    });
    console.log(articleData);
    setArticleData(articleData);
  }
  const getRightSectionComponent = (articleSectionData) => {
    const articleSectionsDictionary = {
      title: <Title>{articleSectionData.data.title}</Title>,
      "text-section": (
        <TextSection
          title={articleSectionData.data.title}
          text={articleSectionData.data.content}
        />
      ),
      "image-gallery": "",
      "image-main": (
        <ArticleImage
          src={articleSectionData.data.image}
          caption={articleSectionData.data.caption}
        />
      ),
      "image-regular": "",
    };
    return articleSectionsDictionary[articleSectionData.sectionName];
  };
  useEffect(() => {
    getArticle();
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
