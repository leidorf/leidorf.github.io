const fs = require('fs');
const path = require('path');

function getWorks(category) {
    const worksDir = path.join(process.cwd(), 'works', category);

    // Kategoriye ait dosyaların listesini al
    const files = fs.readdirSync(worksDir);

    // Dosyaların içeriğini saklamak için bir dizi oluştur
    const contentArray = [];

    // Her dosya için içeriği oku ve diziye ekle
    files.forEach(file => {
        const filePath = path.join(worksDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        contentArray.push(fileContent);
    });

    return contentArray;
}

module.exports = getWorks;
