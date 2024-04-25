import Link from "next/link";
import getWorks from "@/core/getWorks";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";

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
  const categories = getWorks();
  return {
    props: {
      categories,
    },
  };
}
