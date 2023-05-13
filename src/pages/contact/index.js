import Navigation from "@/components/Layout/Navigation/Navigation";
import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
import image from "../../assets/contact-us.webp";
import { SEO } from "../../config/constants";
import SEOHeader from "@/components/SEO/SEOHeader";

import { useRouter } from "next/router";
const index = () => {
  const { asPath } = useRouter();
  const fullUrl = `https://hustlinginsights.com${asPath}`;
  return (
    <>
      <SEOHeader
        title={SEO.title}
        description={SEO.description}
        fullUrl={fullUrl}
        image={SEO.image}
        caption={SEO.caption}
        linkType="website"
      />
      <Navigation />
      <div className={styles.cardBackground}>
        <div className={styles.card}>
          <div className={styles.text}>
            <h1 className={styles.title}>Contact Us</h1>
            <p>
              For any suggestions or complains. please send us an email at:{" "}
            </p>
            <Link href={"mailto:hustling.insights@gmail.com"}>
              hustling.insights@gmail.com
            </Link>
          </div>
          <div className={styles.image}>
            <img src={image.src} />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
