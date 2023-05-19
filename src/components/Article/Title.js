import classes from "./Title.module.scss";
import SharePanel from "./SharePanel";
export default function Title({ children, className }) {
  const resolvedClass = `${classes.header} ${className ? className : ""}`;
  return (
    <div className={classes.container}>
      <h1 className={resolvedClass}>{children}</h1>
      <SharePanel />
    </div>
  );
}
