import Navigation from "@/components/Layout/Navigation/Navigation";
import Article from "@/components/Article/Article";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SuggestedArticles from "@/components/SuggestedArticles/SuggestedArticles";
import styles from "./index.module.scss";
import Head from "next/head";
import Hero from "@/components/Home/Hero";
import TrendingArticles from "@/components/Home/TrendingArticles";
import OurPicks from "@/components/Home/OurPicks";
import { Splitter, SplitterPanel } from "primereact/splitter";

let articles = [
  {
    title: "Entrepreneur Hustler",
    articles: [
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacatpe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "entrepreneur",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "entrepreneur",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "entrepreneur",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "entrepreneur",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacatpe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "entrepreneur",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "entrepreneur",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "entrepreneur",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "entrepreneur",
      },
    ],
  },
  {
    title: "side Hustler",
    articles: [
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacatpe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "side hustler",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "side hustler",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "side hustler",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "side hustler",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacatpe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "side hustler",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "side hustler",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "side hustler",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "side hustler",
      },
    ],
  },
  {
    title: "employed Hustler",
    articles: [
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacatpe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "employed",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "employed",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "employed",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "employed",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacatpe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "employed",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "employed",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "entrepreneur",
      },
      {
        date: "afla cum m-am cacat pe mine",
        title:
          "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
        image:
          "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
        label: "entrepreneur",
      },
    ],
  },
];
console.log(articles);
export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <div className={styles.ourPicksWrapper}>
        <h3 className={styles.sectionTitle}>Popular posts</h3>
        {articles.map((articleSection, index) => {
          return (
            <OurPicks
              key={articleSection.title}
              articleResultsSection={articleSection}
              hasBackground={index % 2}
            />
          );
        })}
      </div>
      <TrendingArticles />
    </>
  );
}
