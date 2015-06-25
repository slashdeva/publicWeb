var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'production';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'publicweb'
    },
    port: 3000,
    db: 'postgres://user:password@localhost/publicweb-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'publicweb'
    },
    port: 80,
    db: 'postgres://user:password@localhost/publicweb-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'publicweb'
    },
    port: 80,
    db: 'postgres://user:password@localhost/publicweb-production'
  }
};

module.exports = config[env];
