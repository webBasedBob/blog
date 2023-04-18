import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./ArticleImage.module.scss";
import Header from "./Title";
import Intro from "../UI/Intro";
import SharePanel from "./SharePanel";
export default function ArticleImage({ src, caption }) {
  return (
    <div>
      <div className={classes.heroImage}>
        <img src={src} />
      </div>
      <p>{caption}</p>
    </div>
  );
}
