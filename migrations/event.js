'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('events', {
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
        event: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    },{
        charset: 'utf8'
        }
    )}
};