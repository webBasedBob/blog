import Intro from "../UI/Intro";
import Image from "next/image";
import heroImg from "../../assets/hero.jpeg";
import Head from "next/head";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Section from "./Section";
import Container from "react-bootstrap/Container";
export default function Article({ article }) {
  return (
    <Container>
      <Hero title={article.title} intro={article.intro} />
      <Introduction fullIntro={article.fullIntro} />
      {article.sections.map((section) => {
        return (
          <Section
            text={section.text}
            title={section.title}
            key={section.title}
          />
        );
      })}
    </Container>
  );
}
