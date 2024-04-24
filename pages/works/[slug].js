// /pages/works/[slug].js

import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";

const works = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Layout>
        <PageHead headTitle={slug} />
        <div className="container">
          <h1>İş Detayı: {slug}</h1>
          <p>İçerik buraya gelecek.</p>
        </div>
      </Layout>
    </>
  );
};

export default works;

/* 
export default WorksPage;


import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import React from "react";

const Works = () => {
  return (
    <>
      <Layout>
        <PageHead headTitle="works" />
        <div className="text-center">
          works are
          <br />
          ...
          <br /> work in progress
        </div>
      </Layout>
    </>
  );
};

export default Works;
 */
