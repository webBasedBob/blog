import classes from "./ArticleImage.module.scss";
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
