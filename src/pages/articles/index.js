import Navigation from "@/components/Layout/Navigation/Navigation";
import Article from "@/components/Article/Article";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SuggestedArticles from "@/components/SuggestedArticles/SuggestedArticles";
import styles from "./index.module.scss";
import Head from "next/head";
import PageWrapper from "@/components/UI/PageWrapper";
export default function Home() {
  let articles = [
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
    {
      text: "afla cum m-am cacat pe mine",
      title: "m-am facut cacat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
    },
  ];

  return (
    <>
      <Navigation />
      <PageWrapper>
        <Row>
          <Article article={null} />
        </Row>
        {/* <Row>
          <SuggestedArticles articles={articles}></SuggestedArticles>
        </Row> */}
      </PageWrapper>
    </>
  );
}
