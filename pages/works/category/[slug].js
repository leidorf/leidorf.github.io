// works/category/[slug].js

import Link from 'next/link';
import getCategory from '@/core/getCategory';

export default function Category({ works }) {
    return (
        <div>
            <h1>Works</h1>
            <ul>
                {works.map(work => (
                    <li key={work.slug}>
                        <Link href={`/works/${work.slug}`}>
                            <a>{work.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const categories = getCategory();
    
    // Check if the category exists
    if (!categories[slug]) {
        return {
            notFound: true,
        };
    }
    
    const works = categories[slug];
    
    return {
        props: {
            works,
        },
    };
}

export async function getStaticPaths() {
    const categories = getCategory();
    const paths = Object.keys(categories).map(category => ({
        params: {
            slug: category,
        },
    }));
    
    return {
        paths,
        fallback: false,
    };
}
