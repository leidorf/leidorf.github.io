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
        <PageHead headTitle="works" />
        <div className="container">
          <h2>works</h2>
          <p>(i seek the forgiveness of the creators for the works i like that i display on the page without permission)</p>
          <ul>
            {allWorksData.map((work) => (
              <li key={work.id}>
                <Link
                  href={`/works/${work.id}`}
                  className="link-danger"
                >
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
