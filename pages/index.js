import Link from "next/link";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Layout>
        <PageHead headTitle="leidorf"></PageHead>
        <div className="container">
          <h1>about me</h1>
          <p>
            hello my name is <span className="fw-light fst-italic">güray dağ</span>. i am interested in cybersecurity, most forms of art, anatolia, foss,
            botanic.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
