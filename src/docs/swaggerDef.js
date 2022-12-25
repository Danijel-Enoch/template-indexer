const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Template API',
    version,
    license: {
      name: 'MIT',
      url: '',
    },
  },
  servers: [
    {
      url:
        config.env === 'development' && config.port === 5000
          ? `http://localhost:${config.port}/v1`
          : 'https://api.companyDomain.com/v1',
    },
  ],
};

module.exports = swaggerDef;
