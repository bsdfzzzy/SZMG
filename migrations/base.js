'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('bases', {
            id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        system: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        subsystem: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        supervisor_1: Sequelize.STRING,
        supervisor_2: Sequelize.STRING,
        supervisor_3: Sequelize.STRING,
        respector: Sequelize.STRING,
        experiment: Sequelize.STRING,
        IP: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        work: Sequelize.TEXT,
        category: Sequelize.STRING,
        stateOrData: Sequelize.STRING,
        More: Sequelize.STRING
        },{
            charset: 'utf8'
        }
    )}
};