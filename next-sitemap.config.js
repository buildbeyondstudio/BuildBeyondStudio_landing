const fs = require('fs');
const path = require('path');

// Load blogs from JSON
function getAdditionalPaths() {
  const blogsPath = path.join(__dirname, 'data', 'blogs.json');
  const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));

  // Add blog index page
  const paths = [
    {
      loc: '/blog',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  ];

  // Add individual blog posts
  blogs.forEach((blog) => {
    paths.push({
      loc: `/blog/${blog.slug}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: blog.date,
    });
  });

  return paths;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://buildbeyondstudio.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async (config) => {
    return getAdditionalPaths();
  },
};