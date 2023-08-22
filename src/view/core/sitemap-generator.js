require('babel-register')({
  presets: ['es2015', 'react']
});

const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;

const generateSitemap = () => (
  new Sitemap(router)
  .build(`https://${process.env.REACT_APP_SITE_URL}`)
  .save(`./public/sitemap.xml`)
);

generateSitemap();
