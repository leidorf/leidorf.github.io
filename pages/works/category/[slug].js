// pages/works/[category]/[slug].js

import { useRouter } from 'next/router';
import getWorks from '@/core/getWorks';

export default function ContentPage({ content }) {
    const router = useRouter();
    const { category, slug } = router.query;

    return (
        <div>
            <h1>{content.title}</h1>
            <p>Author: {content.author}</p>
            <p>Category: {category}</p>
            <p>Slug: {slug}</p>
            <p>Content: {content.content}</p>
        </div>
    );
}

export async function getStaticPaths() {
    const categories = getWorks();
    const paths = Object.keys(categories).reduce((acc, category) => {
        const contentSlugs = categories[category].map(content => content.slug);
        const categoryPaths = contentSlugs.map(slug => ({ params: { category, slug } }));
        return [...acc, ...categoryPaths];
    }, []);

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const categories = getWorks();
    const content = categories[params.category].find(item => item.slug === params.slug);

    return {
        props: {
            content
        }
    };
}
