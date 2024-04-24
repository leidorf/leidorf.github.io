// /pages/works/[slug].js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '@/components/layout/Layout';

const WorksDetailPage = ({ content }) => {
  return (
    <Layout>
      <div>
        <h1>İş Detayı: {content.title}</h1>
        <h2>Kategori: {content.category}</h2>
        <div dangerouslySetInnerHTML={{ __html: content.body }} />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  // Tüm iş dosyalarının dizinini al
  const worksDirectory = path.join(process.cwd(), 'works');
  const fileNames = fs.readdirSync(worksDirectory);

  // Her dosyanın içeriğini alarak paths dizisine ekleyin
  const paths = fileNames.map((fileName) => {
    const fullPath = path.join(worksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
      content: matterResult.data,
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Markdown dosyasından içeriği al
  const worksDirectory = path.join(process.cwd(), 'works');
  const fullPath = path.join(worksDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    props: {
      content: {
        title: matterResult.data.title,
        category: matterResult.data.category,
        body: matterResult.content,
      },
    },
  };
}

export default WorksDetailPage;
