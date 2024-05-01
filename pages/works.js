//works/index.js

import Link from "next/link";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import getCategory from "@/core/getCategory";

export default function Works({ categories }) {
  return (
    <>
      <Layout>
        <PageHead headTitle="works"/>
        <div className="container">
          <h1>categories</h1>
          <ul>
            {Object.keys(categories).map((category) => (
              <li key={category}>
                <Link href={`/works/${category}`} className="text-decoration-none text-danger">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const categories = getCategory();
  return {
    props: {
      categories,
    },
  };
}
