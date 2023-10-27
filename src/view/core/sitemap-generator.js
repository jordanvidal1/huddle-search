require('babel-register')({
  presets: ['es2015', 'react']
});

const Sitemap = require('react-router-sitemap').default;

const huddleRouter = require('./huddle-sitemap-routes').default;
const unitasRouter = require('./unitas-sitemap-routes').default;
const primeRouter = require('./prime-sitemap-routes').default;

const ROUTERS = {
  huddle: huddleRouter,
  unitas: unitasRouter,
  prime: primeRouter
};

const generateSitemap = () => (
  new Sitemap(ROUTERS[process.env.REACT_APP_SITE_NAME])
  .build(`https://${process.env.REACT_APP_SITE_URL}`)
  .save(`./public/sitemap.xml`)
);

generateSitemap();
