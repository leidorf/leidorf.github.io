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

function groupByCategory(data) {
  return data.reduce((acc, work) => {
    const { category } = work;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(work);
    return acc;
  }, {});
}

export default function Works({ allWorksData }) {
  const groupedWorks = groupByCategory(allWorksData);

  return (
    <>
      <Layout>
        <PageHead headTitle="works" />
        <div className="container">
          <h2>works</h2>
          <p className="fw-lighter">(i seek the forgiveness of the creators for the works i like that i display on the page without permission)</p>
          {Object.keys(groupedWorks).map((category) => (
            <div key={category}>
              <h4>{category}</h4>
              <ul>
                {groupedWorks[category].map((work) => (
                  <li key={work.id}>
                    <Link
                      href={`/works/${work.id}`}
                      className={`link-danger ${work.author !== "Güray Dağ" ? "fw-bold" : ""}`}
                    >
                      {work.title} ({work.category})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
