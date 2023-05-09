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
import styles from "./Article.module.scss";
export default function Article({ article }) {
  const [articleJSX, setArticleJSX] = useState();

  const getRightSectionComponent = (articleSectionData) => {
    const articleSectionsDictionary = {
      title: (
        <Title key={articleSectionData.data.title}>
          {articleSectionData.data.title}
        </Title>
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
      "text-section": (
        <div
          className={styles.textSection}
          key={`${articleSectionData.sectionName}-${articleSectionData.order}`}
          dangerouslySetInnerHTML={{
            __html: articleSectionData?.data?.content,
          }}
        ></div>
      ),
    };
    return articleSectionsDictionary[articleSectionData.sectionName];
  };

  useEffect(() => {
    if (article.content) {
      const sections = Object.values(article.content).sort((entryA, entryB) => {
        return entryA.order - entryB.order;
      });
      const jsx = [];
      sections.forEach((section) => {
        jsx.push(getRightSectionComponent(section));
      });
      setArticleJSX(jsx);
    }
  }, [article.content]);
  return <Container>{articleJSX}</Container>;
}
