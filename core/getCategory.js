// Core/getCategory.js

const fs = require('fs');
const matter = require('gray-matter');
const path = require('path');

function getCategory() {
    const worksDir = path.join(process.cwd(), 'works');

    const categories = {};

    fs.readdirSync(worksDir).forEach(category => {
        const categoryPath = path.join(worksDir, category);

        // Skip if not a directory
        if (!fs.lstatSync(categoryPath).isDirectory()) return;

        categories[category] = [];

        fs.readdirSync(categoryPath).forEach(file => {
            const filePath = path.join(categoryPath, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data, content } = matter(fileContent);
            
            // Assuming markdown files have 'title' and 'author' properties in their front matter
            if (data.title && data.author) {
                categories[data.category] = categories[data.category] || []; // Ensure category exists
                categories[data.category].push({
                    title: data.title,
                    author: data.author,
                    content, // Add content here
                    slug: file.replace('.md', '').toLowerCase().replace(/\s+/g, '-') // Assuming markdown file names are unique
                });
            }
        });
    });

    return categories;
}

module.exports = getCategory;
