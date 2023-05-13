import React from "react";
import Head from "next/head";
import { SEO } from "../../config/constants";
const SEOHeader = ({
  title,
  description,
  fullUrl,
  image,
  caption,
  richGoogleResultData,
  linkType,
}) => {
  const mainImageCaption = caption || "";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* open graph protocol headers - minimum required tags */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={linkType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      {/* additional/optional tags */}
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SEO.domain} />
      <meta property="og:image:alt" content={caption} />
      {/* twitter tags */}
      <meta
        property="twitter:description"
        content={
          description?.length < 200 ? description : description.slice(0, 195)
        }
      />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:image" content={image} />
      <meta
        property="twitter:image:alt"
        content={
          mainImageCaption.length < 420
            ? mainImageCaption
            : mainImageCaption.slice(0, 400)
        }
      />
      <meta property="twitter:card" content={linkType} />
      <meta property="" content="" />
      {/* rich google result - blog posting */}
      {richGoogleResultData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(richGoogleResultData),
          }}
          key="product-jsonld"
        />
      )}
    </Head>
  );
};

export default SEOHeader;
