import React from "react";
import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "leidorf's work storage"}</title>
      </Head>
    </>
  );
};

export default PageHead;
