import { getAllWorkIds, getWorkData } from "../../lib/works";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";

export async function getStaticProps({ params }) {
  const workData = await getWorkData(params.id);
  return {
    props: {
      workData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllWorkIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Work({ workData }) {
  return (
    <>
      <Layout>
        <PageHead headTitle={workData.title.toLowerCase()} />
        <div className="container">
          <div>
            <h3 className="text-danger">{workData.title.toLowerCase()}</h3>
            <p dangerouslySetInnerHTML={{ __html: workData.contentHtml }}></p>
            <p className="text-danger">- {workData.author}</p>
          </div>
        </div>
      </Layout>
    </>
  );
}
