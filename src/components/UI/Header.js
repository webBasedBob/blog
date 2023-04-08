import { resolve } from "styled-jsx/css";
import classes from "./Header.module.scss";

export default function Header({ children, className }) {
  const resolvedClass = `${classes.header} ${className ? className : ""}`;
  return <h1 className={resolvedClass}>{children}</h1>;
}
