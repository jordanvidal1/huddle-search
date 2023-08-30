require('babel-register')({
  presets: ['es2015', 'react']
});

const Sitemap = require('react-router-sitemap').default;

const huddleRouter = require('./huddle-sitemap-routes').default;
const unitasRouter = require('./unitas-sitemap-routes').default;

const router = process.env.REACT_APP_SITE_NAME === 'huddle'
  ? huddleRouter
  : unitasRouter;

const generateSitemap = () => (
  new Sitemap(router)
  .build(`https://${process.env.REACT_APP_SITE_URL}`)
  .save(`./public/sitemap.xml`)
);

generateSitemap();
