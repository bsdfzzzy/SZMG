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
        system_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'systems',
                    key: 'id'
                }
            },
        event: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    },{
        charset: 'utf8'
        }
    )},
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('events');
    }
};