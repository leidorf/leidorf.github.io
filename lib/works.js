import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import images from 'remark-images'; // Eklenti importu

const worksDirectory = path.join(process.cwd(), 'works');

export function getSortedWorksData() {
  const fileNames = fs.readdirSync(worksDirectory);
  const allWorksData = fileNames.map((fileName) => {
    const fullPath = path.join(worksDirectory, fileName);

    if (fs.statSync(fullPath).isDirectory()) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id: fileName.replace(/\.md$/, ''),
      ...matterResult.data,
    };
  }).filter(work => work !== null);

  return allWorksData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export async function getWorkData(id) {
  const fullPath = path.join(worksDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(images) // images eklentisini kullanma
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getAllWorkIds() {
  const fileNames = fs.readdirSync(worksDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
