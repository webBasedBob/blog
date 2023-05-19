import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import classes from "./Introduction.module.scss";

export default function Introduction({ fullIntro }) {
  return (
    <Container>
      <Row>
        <p className={classes.text}>{fullIntro}</p>
      </Row>
    </Container>
  );
}
