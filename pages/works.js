import { getSortedWorksData } from '../lib/works';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import PageHead from '@/components/layout/PageHead';

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
          <h1>Works</h1>
          <ul>
            {allWorksData.map(({ id, title }) => (
              <li key={id}>
                <Link href={`/works/${id}`} legacyBehavior>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
