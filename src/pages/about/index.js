import Navigation from "@/components/Layout/Navigation/Navigation";
import React from "react";
import styles from "./index.module.scss";
import image from "../../assets/about-us.jpg";
import { SEO } from "../../config/constants";
import { useRouter } from "next/router";
import SEOHeader from "@/components/SEO/SEOHeader";

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
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>About us</h1>
          <p>
            <span>&nbsp;</span> We are a team of passionate business enthusiasts
            who love to share our insights on entrepreneurship, side hustles,
            and navigating the corporate world. Our goal is to inspire and help
            others achieve their dreams of starting and growing successful
            businesses. Whether you're a seasoned entrepreneur or just starting
            out, we are here to provide practical tips, advice, and inspiration
            to help you reach your full potential.
          </p>
        </div>
        <div className={styles.image}>
          <img src={image.src} />
        </div>
      </div>
    </>
  );
};

export default index;
