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
          <h2>about me</h2>
          <p>
            hello my name is <span className="fw-light fst-italic">güray dağ</span>. 
          </p>
          <p>
            <Link href={'works'} className="text-decoration-none link-danger">here</Link> are the works i have done/liked.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
