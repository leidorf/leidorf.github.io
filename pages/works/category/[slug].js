import fs from 'fs';
import matter from 'gray-matter';

export async function getStaticPaths() {
  try {
    const categories = fs.readdirSync('works');

    let paths = [];
    for (const category of categories) {
      const categoryFiles = fs.readdirSync(`works/${category}`);
      const categoryPaths = categoryFiles.map((fileName) => ({
        params: {
          category: category,
          slug: fileName.replace(/\.md$/, '') 
        }   
      }));
      paths = [...paths, ...categoryPaths];
    }

    return {
      paths,
      fallback: "blocking"
    };  
  } catch (error) {
    console.error(error);

    return {
      paths: [], 
      fallback: false
    };  
  }
};

export async function getStaticProps ({ params }) {
  try {
    const fileName = fs.readFileSync(`/works/${params.category}/${params.slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);

    return {
      props: {
        frontmatter,
        content
      }   
    };  
  } catch (error) {
    console.error(error);

    return {
      props: {}
    };  
  }
};

function Post ({ frontmatter, content }) {
  return (
    <div className="prose mx-auto mt-8">
      <h1>{ frontmatter.title }</h1>
      <div>{ content }</div>
    </div>
  );
};

export default Post;
