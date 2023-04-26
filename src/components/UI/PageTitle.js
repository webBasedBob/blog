import classes from "./PageTitle.module.scss";

export default function PageTitle({ children, className }) {
  const resolvedClass = `${classes.header} ${className ? className : ""}`;
  return (
    <div className={classes.container}>
      <h1 className={resolvedClass}>{children}</h1>
    </div>
  );
}
