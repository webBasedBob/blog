import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Hero.module.scss";
import Header from "../UI/Header";
import Intro from "../UI/Intro";
import SharePanel from "./SharePanel";
export default function Hero({ title, intro }) {
  return (
    <Container style={{ margin: "5rem auto", color: "##0000009f" }}>
      <Row>
        <Col>
          <Header>{title}</Header>
          {/* <Intro>{intro}</Intro> */}
          <SharePanel />
        </Col>
      </Row>
      <Row>
        <div className={classes.heroImage}>
          <img src="https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero.jpeg?alt=media&token=71410018-b904-4ec6-8c71-b5ca850f2ab8" />
        </div>
      </Row>
    </Container>
  );
}
