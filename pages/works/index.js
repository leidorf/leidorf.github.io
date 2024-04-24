// /pages/works/index.js

import React from "react";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";

const WorksIndexPage = () => {
  return (
    <>
      <PageHead />
      <Layout>
        <div className="container">
          <h1>İşlerim</h1>
          <p>
            Burada işlerinizi listeleyebilir veya kullanıcıyı farklı
            kategorilere yönlendirebilirsiniz.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default WorksIndexPage;
