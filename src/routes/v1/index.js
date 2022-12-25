const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const dataRoute = require('./data.route');
// const payRoute = require('./payment.route');
const config = require('../../config/config');

const { root, createRoute } = require('../../utils/router');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/indexer',
    route: dataRoute,
  },
];

const groupRoutes = ['campaign', 'donation', 'story', 'comment', 'withdrawal', 'wallet', 'tracking'];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

groupRoutes.forEach(createRoute);
createRoute(
  'upload',
  {
    async create(req, res) {
      res.json({
        result: req.file,
      });
    },
  },
  ['index', 'update', 'patch']
);
// load up payment routes
// payRoute(process.env);
router.use('/', root.export());

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
