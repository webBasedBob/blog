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
export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <TrendingArticles />
      <OurPicks />
    </>
  );
}
