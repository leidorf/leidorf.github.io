import Link from "next/link";
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";

const Error = () => {
  return (
    <>
      <Layout>
        <PageHead headTitle="404"></PageHead>
        <section className="section">
          <div className="container text-center">
            <h1 className=" text-weight-bold">
              404 :(
            </h1>
            <p>wanna go to the <Link href="/" className="text-danger">home page</Link>?</p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Error;
