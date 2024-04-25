import { useRouter } from "next/router";
import getWorks from "@/core/getWorks";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import Link from "next/link";

export default function Category({ category }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Layout>
        <PageHead headTitle={slug} />
        <div className="container">
          <h1>{slug}</h1>
          <ul>
            {category &&
              category.map((content) => (
                <li key={content.slug}>
                  <Link
                    href={`/works/${slug}/${content.slug}`}
                    className="text-decoration-none text-danger"
                  >
                    {content.title} - {content.author}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const categories = getWorks();
  const paths = Object.keys(categories).map((category) => ({
    params: { slug: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categories = getWorks();
  const category = categories[params.slug] || [];

  return {
    props: {
      category,
    },
  };
}
