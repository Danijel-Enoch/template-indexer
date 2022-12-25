const { Router } = require('express');
const RouteGroup = require('express-route-grouping').default;
const models = require('../models');
const auth = require('../middlewares/auth');
const { capitalize } = require('./string');

const root = new RouteGroup('/', Router());

module.exports = {
  root,
  createRoute(paths, handlers, excludes = []) {
    root.group(paths, (base) => {
      /** @type {import('mongoose').Model} */
      const model = models[capitalize(paths.replace(/\//g, '_'))];
      base.resource({
        handlers: {
          // GET: /:path
          async index(_req, res) {
            const result = await model.find();
            res.json({
              result,
            });
          },

          // GET: /:path/:pathId
          async find(req, res) {
            const result = await model.findById(req.params.id);
            res.json({
              result,
            });
          },

          // POST: /:path
          async create(req, res) {
            const result = await model.create(req.body);
            res.json({
              result,
            });
          },

          // PUT: /:path/:pathId
          async update(req, res) {
            const result = await model.findByIdAndUpdate(req.params.id, req.body);
            if (result)
              res.json({
                result,
              });
            else res.status(400).json({ message: 'Bad request' });
          },

          // PATCH: /:path/:pathId
          async patch(req, res) {
            const result = await model.findByIdAndUpdate(req.params.id, req.body);
            if (result)
              res.json({
                result,
              });
            else res.status(400).json({ message: 'Bad request' });
          },

          // DELETE: /:path/:pathId
          async delete(req, res) {
            const result = await model.findByIdAndDelete(req.params.id);
            if (result)
              res.json({
                result,
              });
            else res.status(400).json({ message: 'Bad request' });
          },
          ...handlers,
        },
        excludes,
        beforeHandlers: [auth('guest', 'user')],
      });
    });
  },
};
