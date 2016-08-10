'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('bizs', {
            id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        system: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        column: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        playStart: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        playFinish: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        numOfNeeds: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        allReadyTime: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        state: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        }
        },{
            charset: 'utf8'
        }
    )}
};