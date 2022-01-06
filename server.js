'use strict';
require('dotenv').config();
const Hapi = require('@hapi/hapi');
const sequelizeInstance = require('./src/config/database.js');
const routes = require('./src/routes/index.js');

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost',
});

server.route(routes);

(async () => {
  try {
    await server.start();

    // function db_connect(req, res, next) {
    //   sequelizeInstance
    //     .authenticate()
    //     .then(() => {
    //       console.log('Database Connected');
    //       next();
    //       return;
    //     })
    //     .catch((err) => {
    //       console.log('Error ', err);
    //       res.status(503).json({
    //         status: 'error',
    //         message: 'error occurred while connecting with database',
    //         data: {},
    //       });
    //     });
    // }

    // register sequelize-js plugin
    // server.register([
    //   {
    //     plugin: require('hapi-sequelizejs'),
    //     options: [
    //       {
    //         name: process.env.SQL_Database, // identifier
    //         models: ['./src/models/*.js'], // paths/globs to model files
    //         // ignoredModels: [__dirname + '/src/models/**/*.js'], // OPTIONAL: paths/globs to ignore files
    //         sequelize: sequelizeInstance, // sequelize instance
    //         sync: true, // sync models - default false
    //         forceSync: false, // force sync (drops tables) - default false
    //       },
    //     ],
    //   },
    // ]);

    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.log(err);
  }
})();
