import React, { useState } from "react";
import BlogPostEditor from "@/components/Admin/ArticleBuilder/ArticleBuilder";
import Head from "next/head";
// pula[0]?.split(/[\r\n]+/)
const Admin = () => {
  return (
    <>
      <Head>
        <title key="title">Admin</title>
        <meta name="robots" content="noindex,nofollow" key="noindex-nofollow" />
      </Head>
      <BlogPostEditor />
    </>
  );
};

export default Admin;
