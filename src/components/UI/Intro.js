import classes from "./Intro.module.scss";

export default function Intro({ children }) {
  return <p className={classes.intro}>{children}</p>;
}
