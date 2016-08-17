'use strict';

import fs from 'fs';
import path from 'path';
import logger from 'logger';
import Sequelize from 'sequelize';

const modelsPath = path.join(__dirname);
const env = process.env.NODE_ENV || "development",
    config = require(path.join(__dirname, '..', 'config', 'config.json'))[env],
    sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        port: config.port,
        language: config.language
    });

var db = {};

fs
    .readdirSync(modelsPath)
    .filter(function(file) {
        return (file.indexOf(".") > 0 && file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(modelsPath, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

export {sequelize};