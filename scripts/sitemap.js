const fs = require('fs');
const { forEach } = require('lodash');

const TEXT = '\x1b[0;20m';
const PATH = '\x1b[02m';
const DONE = '\x1b[30;42m';
const ERROR = '\x1b[39;41m';

const baseURL = 'https://chimerastudio.co.uk';
const defaults = {
  lastmod: new Date().toISOString().slice(0, 10),
  changefreq: 'monthly',
  priority: 0.8,
};

const routes = {
  index: '',
  privacy: '/privacy-policy',
};

function generateSitemap() {
  const sitemapStart = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const sitemapEnd = '\n</urlset>';
  let sitemap = '';

  forEach(routes, (route) => {
    sitemap += `
  <url>
    <loc>${baseURL}${route}</loc>
    <lastmod>${defaults.lastmod}</lastmod>
    <changefreq>${defaults.changefreq}</changefreq>
    <priority>${defaults.priority}</priority>
  </url>`;
  });

  fs.writeFile('public/sitemap.xml', sitemapStart + sitemap + sitemapEnd, (err) => {
    if (err) {
      console.log(ERROR, ' ERROR ', TEXT + String(err) + '');
    } else {
      console.log(DONE, ' SUCCESS ', TEXT);
      console.log(TEXT + `File saved: ${PATH}public/${TEXT}sitemap.xml`);
    }
    console.log(TEXT);
  });
}

console.log('');
generateSitemap();

