import classes from "./Header.module.scss";

export default function Header({ children }) {
  return <h1 className={classes.header}>{children}</h1>;
}
