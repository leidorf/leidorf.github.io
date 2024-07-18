import Link from "next/link";
import { getSortedWorksData } from "../lib/works";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";

export async function getStaticProps() {
  const allWorksData = getSortedWorksData();
  return {
    props: {
      allWorksData,
    },
  };
}

export default function Works({ allWorksData }) {
  return (
    <>
      <Layout>
        <PageHead headTitle="Works" />
        <div className="container">
          <h2>works</h2>
          <ul>
            {allWorksData.map((work) => (
              <li key={work.id}>
                <Link href={`/works/${work.id}`} className="link-danger">
                    {work.title} ({work.category})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
