import React from "react";
import Link from "next/link";
import styles from "./LinksToArticles.module.scss";
const LinksToArticles = ({ offcanvas }) => {
  const resolvedClass = `${styles.articlesLinksWrapper} ${
    offcanvas ? styles.offcanvas : ""
  }`;
  return (
    <div className={resolvedClass}>
      <button className={styles.navItem} type="button">
        {" "}
        <Link className={styles.navLink} href="/articles/entrepreneur">
          entrepreneur hustler
        </Link>
      </button>
      <button className={styles.navItem} type="button">
        {" "}
        <Link className={styles.navLink} href="/articles/side-hustler">
          side hustler
        </Link>
      </button>
      <button className={styles.navItem} type="button">
        <Link className={styles.navLink} href="/articles/corporate">
          corporate hustler
        </Link>
      </button>
    </div>
  );
};

export default LinksToArticles;
