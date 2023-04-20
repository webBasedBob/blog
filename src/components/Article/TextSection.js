import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./TextSection.module.scss";

export default function Section({ title, text }) {
  return (
    <Container className={classes.section}>
      <Row>
        <h3 className={classes.title}>{title}</h3>
        {text.map((paragraph) => {
          return (
            <p className={classes.text}>{paragraph || <span> &#160; </span>}</p>
          );
        })}
      </Row>
    </Container>
  );
}
