// /pages/works/category/[slug].js

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";

const WorksCategoryPage = ({ content }) => {
  return (
    <>
      <PageHead />
      <Layout>
        <div className="container">
          <h1>{content.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content.body }} />
        </div>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  // Tüm iş kategorilerini al
  const categories = await getCategories();

  // Her kategorideki işlerin slug'larını al
  const paths = categories.flatMap((category) => {
    const worksDirectory = path.join(process.cwd(), "works", category);
    const fileNames = fs.readdirSync(worksDirectory);
    return fileNames.map((fileName) => ({
      params: {
        category,
        slug: fileName.replace(/\.md$/, ""),
      },
    }));
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Markdown dosyasından içeriği al
  const { category, slug } = params;
  const worksDirectory = path.join(process.cwd(), "works", category);
  const fullPath = path.join(worksDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return {
    props: {
      content: {
        title: matterResult.data.title,
        body: matterResult.content,
      },
    },
  };
}

export default WorksCategoryPage;

// Örnek bir getCategories fonksiyonu
async function getCategories() {
  const worksDirectory = path.join(process.cwd(), "works");
  const categories = fs.readdirSync(worksDirectory);
  return categories;
}
